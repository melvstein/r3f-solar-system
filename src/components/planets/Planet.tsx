import { useFrame } from "@react-three/fiber";
import { forwardRef, RefObject, useEffect, useRef, useState } from "react";
import { DoubleSide, Mesh, Texture } from "three";
import { TAtmosphere, TMoon, TPlanet, TRing } from "../../Types/planetTypes";
import { adjustSpeed } from "../../utils/configs";
import { useOrbitControls } from "../../helpers/DevHelpers";
import { Html, useTexture } from '@react-three/drei';
import * as THREE from "three";

type PlanetProps = {
	planet: TPlanet;
    texture: Texture;
};

const Planet = forwardRef<Mesh, PlanetProps>(({ planet, texture }, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const orbitEnabled = useOrbitControls();
    const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.name = planet.name;
            meshRef.current.position.x = planet.distance;
            meshRef.current.userData.planetProperties = planet;
        }
    }, [meshRef, planet]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += planet.speed * adjustSpeed;
            if (!orbitEnabled) return;
            meshRef.current.position.x = Math.sin(meshRef.current.rotation.y) * planet.distance;
            meshRef.current.position.z = Math.cos(meshRef.current.rotation.y) * planet.distance;
        }
    });

    const moons = planet.moons?.map((moon, index) => {
        return (
            <Moon key={index} moon={moon}/>
        )
    });

    return (
        <group ref={meshRef}>
            <mesh onPointerOver={() => setHoveredPlanet(planet.name)} onPointerOut={() => setHoveredPlanet(null)}>
                <sphereGeometry args={[planet.radius, 32, 32]} />
                <meshStandardMaterial map={texture} />
            </mesh>
            { planet.ring && <Ring ring={planet.ring} /> }
            { moons }
            { planet.atmosphere && <Atmosphere atmosphere={planet.atmosphere} /> }

            {hoveredPlanet === planet.name && (
                <Html
                    position={[0, planet.radius + 0.5, 0]} // float label above the planet
                    style={{
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '150px',
                    }}
                    className="bg-black/5 text-white p-4 round-lg text-lg"
                    center
                    distanceFactor={10}
                    occlude
                >
                    {planet.name}
                </Html>
            )}
        </group>
    );
});

const Moon = ({ moon }: { moon: TMoon }) => {
	const moonRef = useRef<Mesh>(null);
    const texture: Texture = useTexture("/assets/textures/2k_moon.jpg");

	useFrame(() => {
		if (moonRef.current) {
			moonRef.current.rotation.y += moon.speed * adjustSpeed;
			moonRef.current.position.x = Math.sin(moonRef.current.rotation.y) * moon.distance;
			moonRef.current.position.z = Math.cos(moonRef.current.rotation.y) * moon.distance;
		}
	});

	return (
		<mesh ref={moonRef}>
			<sphereGeometry args={[moon.radius, 32, 32]} />
			<meshStandardMaterial map={texture} />
		</mesh>
	);
};

const Ring = ({ ring }: { ring: TRing }) => {
	const ringRef = useRef<Mesh>(null);

    useEffect(() => {
		if (ringRef.current) {
			ringRef.current.rotation.x = ring.tilt;
			ringRef.current.position.set(0, 0, 0);
		}
	}, []);

	return (
		<mesh ref={ringRef}>
			<ringGeometry args={[ring.innerRadius, ring.outerRadius, 64]} />

			<meshStandardMaterial
                color={ring.color}
                opacity={ring.opacity}
                transparent={true}
                side={DoubleSide}
            />
		</mesh>
	);
};

const Atmosphere = (({ atmosphere }: { atmosphere : TAtmosphere}) => {

    return (
        <mesh>
            <sphereGeometry args={[atmosphere.radius, 32, 32]} />
            <meshStandardMaterial
                color={atmosphere.color}
                transparent={true}
                opacity={atmosphere.opacity}
                blending={THREE.AdditiveBlending} // Adds to background, creating glow effect
                emissive={atmosphere.emissive} // Makes the atmosphere emit light for the glow effect
                emissiveIntensity={atmosphere.emissiveIntensity} // Controls the intensity of the emitted light
                depthWrite={false} // Prevents writing to depth buffer, helps with rendering order
            />
        </mesh>
    );
});

Planet.displayName = "Planet";

export default Planet;
