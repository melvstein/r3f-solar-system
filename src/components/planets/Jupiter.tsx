import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Jupiter = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const jupiterTexture = useTexture('/assets/textures/2k_jupiter.jpg');
    const moonTexture = useTexture("/assets/textures/2k_moon.jpg");

    const planet: TPlanet = {
      name: "Jupiter",
      radius: 2.5,
      distance: 50,
      speed: 0.006,
      ring: {
        color: 0xaaaaaa, // light gray
        innerRadius: 2.6,
        outerRadius: 2.8,
        tilt: Math.PI / 2 - 0.054, // ~3.1°
        opacity: 0.2,
      },
      moons: [
        {
          name: "Io",
          radius: 0.2,
          distance: 2.5,
          speed: 0.04,
          texture: moonTexture,
        },
        {
          name: "Europa",
          radius: 0.18,
          distance: 3,
          speed: 0.035,
          texture: moonTexture,
        },
        {
          name: "Ganymede",
          radius: 0.3,
          distance: 3.5,
          speed: 0.03,
          texture: moonTexture,
        },
        {
          name: "Callisto",
          radius: 0.25,
          distance: 4,
          speed: 0.025,
          texture: moonTexture,
        },
      ],
      texture: jupiterTexture,
    };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

export default Jupiter;