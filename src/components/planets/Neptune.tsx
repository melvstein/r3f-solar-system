import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Neptune = forwardRef<Mesh, { planet : TPlanet }>(({ planet }, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const neptuneTexture = useTexture('/assets/textures/neptune.png');

    if (planet == null) {
        console.log("Neptune from API is empty");

        planet = {
            name: "Neptune",
            radius: 1.4,
            distance: 95,
            speed: 0.002,
            atmosphere: {
                radius: 1.6,
                color: "#a0c4ff",
                opacity: 0.25,
                emissive: "#90caf9",
                emissiveIntensity: 0.5,
            },
            ring: {
                color: 0x8888ff, // soft bluish-purple
                innerRadius: 1.8,
                outerRadius: 2,
                tilt: Math.PI / 2 - 0.494, // ~28.3°
                opacity: 0.1,
            },
            moons: [
                {
                name: "Triton",
                radius: 0.2,
                distance: 3.5,
                speed: 0.03,
                },
            ],
        };
    }

    return (
        <Planet ref={meshRef} planet={planet} texture={neptuneTexture} />
    );
});

Neptune.displayName = "Neptune";

export default Neptune;