import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../Types/planetTypes";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Mars = forwardRef<Mesh, { planet : TPlanet }>(({ planet }, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const marsTexture = useTexture('/assets/textures/2k_mars.jpg');

    if (planet == null) {
        console.log("Mars from API is empty");

        planet = {
            name: "Mars",
            radius: 0.8,
            distance: 34,
            speed: 0.008,
            atmosphere: {
            radius: 0.95,
            color: "#ff6f00",
            opacity: 0.15,
            emissive: "darkred",
            emissiveIntensity: 0.6,
            },
            ring: null,
            moons: [
            {
                name: "Phobos",
                radius: 0.1,
                distance: 2,
                speed: 0.04,
            },
            {
                name: "Deimos",
                radius: 0.08,
                distance: 3,
                speed: 0.02,
            },
            ],
        };
    }

    return (
        <Planet ref={meshRef} planet={planet} texture={marsTexture} />
    );
});

Mars.displayName = "Mars";

export default Mars;