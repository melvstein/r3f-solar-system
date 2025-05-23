import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Mars = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const marsTexture = useTexture('/assets/textures/2k_mars.jpg');
    const moonTexture = useTexture("/assets/textures/2k_moon.jpg");

    const planet: TPlanet = {
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
            texture: moonTexture,
          },
          {
            name: "Deimos",
            radius: 0.08,
            distance: 3,
            speed: 0.02,
            texture: moonTexture,
          },
        ],
        texture: marsTexture,
      };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

Mars.displayName = "Mars";

export default Mars;