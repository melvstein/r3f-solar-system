import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../Types/planetTypes";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Jupiter = forwardRef<Mesh, { planet : TPlanet }>(({ planet }, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const jupiterTexture = useTexture('/assets/textures/2k_jupiter.jpg');

    if (planet == null) {
        console.log("Jupiter from API is empty");

        planet = {
            name: "Jupiter",
            radius: 2.5,
            distance: 50,
            speed: 0.006,
            atmosphere: {
                radius: 2.8,
                color: "#d2b48c",
                opacity: 0.25,
                emissive: "#ffcc80",
                emissiveIntensity: 0.5,
            },
            ring: {
                color: 0xaaaaaa, // light gray
                innerRadius: 3,
                outerRadius: 3.2,
                tilt: Math.PI / 2 - 0.054, // ~3.1°
                opacity: 0.2,
            },
            moons: [
                {
                name: "Io",
                radius: 0.2,
                distance: 2.9,
                speed: 0.04,
                },
                {
                name: "Europa",
                radius: 0.18,
                distance: 3,
                speed: 0.035,
                },
                {
                name: "Ganymede",
                radius: 0.3,
                distance: 3.5,
                speed: 0.03,
                },
                {
                name: "Callisto",
                radius: 0.25,
                distance: 4,
                speed: 0.025,
                },
            ],
        };
    }

    return (
        <Planet ref={meshRef} planet={planet} texture={jupiterTexture} />
    );
});

Jupiter.displayName = "Jupiter";

export default Jupiter;