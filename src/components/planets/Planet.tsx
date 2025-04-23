import { useFrame } from "@react-three/fiber";
import { forwardRef, RefObject, useEffect, useRef } from "react";
import { DoubleSide, Mesh } from "three";
import { TAtmosphere, TMoon, TPlanet, TRing } from "../../utils/types";
import { adjustSpeed } from "../../utils/configs";
import * as THREE from "three"

type PlanetProps = {
	planet: TPlanet;
};

const Planet = forwardRef<Mesh, PlanetProps>(({ planet }, ref) => {
    const meshRef = ref as RefObject<Mesh>;

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.name = planet.name;
            meshRef.current.position.x = planet.distance;
        }
    }, [meshRef]);

    useFrame(() => {
        if (meshRef.current) {
           /*  meshRef.current.rotation.y += planet.speed * adjustSpeed;
            meshRef.current.position.x = Math.sin(meshRef.current.rotation.y) * planet.distance;
            meshRef.current.position.z = Math.cos(meshRef.current.rotation.y) * planet.distance; */
        }
    });

    const moons = planet.moons?.map((moon, index) => {
        return (
            <Moon key={index} moon={moon}/>
        )
    });

    return (
        <group ref={meshRef}>
            <mesh>
                <sphereGeometry args={[planet.radius, 32, 32]} />
                <meshStandardMaterial map={planet.texture} />
            </mesh>
            { planet.ring && <Ring ring={planet.ring} /> }
            { moons }
            { planet.atmosphere && <Atmosphere atmosphere={planet.atmosphere} /> }
        </group>
    );
});

Planet.displayName = "Planet";

const Moon = ({ moon }: { moon: TMoon }) => {
	const moonRef = useRef<Mesh>(null);

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
			<meshStandardMaterial map={moon.texture} />
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
                color={atmosphere.color} // The color of the atmosphere
                transparent={true} // Makes it semi-transparent
                opacity={atmosphere.opacity} // Controls opacity, can be adjusted
                blending={THREE.AdditiveBlending} // Adds to background, creating glow effect
                emissive={atmosphere.emissive} // Makes the atmosphere emit light for the glow effect
                emissiveIntensity={atmosphere.emissiveIntensity} // Controls the intensity of the emitted light
                depthWrite={false} // Prevents writing to depth buffer, helps with rendering order
            />
        </mesh>
    );
});

export default Planet;
