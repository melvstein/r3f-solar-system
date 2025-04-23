import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Saturn = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const saturnTexture = useTexture('/assets/textures/2k_saturn.jpg');
    const moonTexture = useTexture("/assets/textures/2k_moon.jpg");

    const planet: TPlanet = {
      name: "Saturn",
      radius: 2,
      distance: 65,
      speed: 0.005,
      ring: {
        color: 0xb1976b,
        innerRadius: 2.2,
        outerRadius: 3.5,
        tilt: Math.PI / 2 - 0.466, // ~26.7°
        opacity: 0.6,
      },
      atmosphere: {
        radius: 2.3,
        color: "#ffe0b2",
        opacity: 0.25,
        emissive: "#ffd180",
        emissiveIntensity: 0.5,
      },
      moons: [
        {
          name: "Titan",
          radius: 0.25,
          distance: 3.5,
          speed: 0.025,
          texture: moonTexture,
        },
        {
          name: "Enceladus",
          radius: 0.1,
          distance: 2.8,
          speed: 0.03,
          texture: moonTexture,
        },
      ],
      texture: saturnTexture,
    };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

Saturn.displayName = "Saturn";

export default Saturn;