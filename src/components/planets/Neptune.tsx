import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Neptune = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const neptuneTexture = useTexture('/assets/textures/neptune.png');
    const moonTexture = useTexture("/assets/textures/2k_moon.jpg");

    const planet: TPlanet = {
      name: "Neptune",
      radius: 1.4,
      distance: 95,
      speed: 0.002,
      ring: {
        color: 0x8888ff, // soft bluish-purple
        innerRadius: 1.5,
        outerRadius: 1.7,
        tilt: Math.PI / 2 - 0.494, // ~28.3°
        opacity: 0.1,
      },
      atmosphere: {
        radius: 1.6,
        color: "#a0c4ff",
        opacity: 0.25,
        emissive: "#90caf9",
        emissiveIntensity: 0.5,
      },
      moons: [
        {
          name: "Triton",
          radius: 0.2,
          distance: 3.5,
          speed: 0.03,
          texture: moonTexture,
        },
      ],
      texture: neptuneTexture,
    };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

Neptune.displayName = "Neptune";

export default Neptune;