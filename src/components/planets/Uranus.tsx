import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Uranus = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const uranusTexture = useTexture('/assets/textures/2k_uranus.jpg');
    const moonTexture = useTexture("/assets/textures/2k_moon.jpg");

    const planet: TPlanet = {
      name: "Uranus",
      radius: 1.5,
      distance: 80,
      speed: 0.003,
      atmosphere: {
        radius: 1.7,
        color: "#b2ebf2",
        opacity: 0.2,
        emissive: "#81d4fa",
        emissiveIntensity: 0.5,
      },
      ring: {
        color: 0xb5e0ff, // icy blue
        innerRadius: 1.8,
        outerRadius: 2,
        tilt: -Math.PI / 2, // ~97.8°, basically sideways
        opacity: 0.15,
      },
      moons: [
        {
          name: "Miranda",
          radius: 0.1,
          distance: 2.5,
          speed: 0.035,
          texture: moonTexture,
        },
        {
          name: "Ariel",
          radius: 0.12,
          distance: 3,
          speed: 0.03,
          texture: moonTexture,
        },
      ],
      texture: uranusTexture,
    };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

Uranus.displayName = "Uranus";

export default Uranus;