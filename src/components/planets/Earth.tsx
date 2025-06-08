import { forwardRef, RefObject } from "react";
import { TPlanet } from "../../utils/types";
import { Mesh } from "three";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Earth = forwardRef<Mesh, { planet: TPlanet }>(({ planet }, ref) => {
	const meshRef = ref as RefObject<Mesh>;
	const earthTexture = useTexture("/assets/textures/2k_earth_daymap.jpg");

    if (planet == null) {
        console.log("Earth from API is empty");

        planet = {
            name: "Earth",
            radius: 1,
            distance: 26,
            speed: 0.01,
            atmosphere: {
                radius: 1.2,
                color: "#00bcd4",
                opacity: 0.2,
                emissive: "blue",
                emissiveIntensity: 1,
            },
            ring: null,
            moons: [
                {
                    name: "Moon",
                    radius: 0.27,
                    distance: 3,
                    speed: 0.03,
                },
            ],
        };
    }

	return (
		<Planet ref={meshRef} planet={planet} texture={earthTexture} />
	);
});

Earth.displayName = "Earth";

export default Earth;
