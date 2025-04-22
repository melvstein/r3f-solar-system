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
      ring: {
        color: 0xb5e0ff, // icy blue
        innerRadius: 1.6,
        outerRadius: 1.8,
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

export default Uranus;