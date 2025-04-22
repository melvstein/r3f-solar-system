import { useFrame } from "@react-three/fiber";
import { forwardRef, RefObject, useEffect, useRef } from "react";
import { Mesh } from "three";
import { TMoon, TPlanet } from "../../utils/types";

type PlanetProps = {
	planet: TPlanet;
};

const Moon = ({ moon }: { moon: TMoon }) => {
	const moonRef = useRef<Mesh>(null);

	useFrame((state, delta) => {
		if (moonRef.current) {
			moonRef.current.rotation.y += moon.speed * delta;
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

const Planet = forwardRef<Mesh, PlanetProps>(({ planet }, ref) => {
    const meshRef = ref as RefObject<Mesh>;

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.name = planet.name;
            meshRef.current.position.x = planet.distance;
        }
    }, [meshRef]);

    useFrame((state, delta) => {
        meshRef.current.rotation.y += planet.speed * delta;
        meshRef.current.position.x = Math.sin(meshRef.current.rotation.y) * planet.distance;
        meshRef.current.position.z = Math.cos(meshRef.current.rotation.y) * planet.distance;
    });

    const moons = planet.moons?.map((moon, index) => {
        return (
            <Moon key={index} moon={moon}/>
        )
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[planet.radius, 32, 32]} />
            <meshStandardMaterial map={planet.texture} />
            { moons }
        </mesh>
    );
});

Planet.displayName = "Planet";

export default Planet;
