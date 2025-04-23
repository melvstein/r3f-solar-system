import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Venus = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const venusTexture = useTexture('/assets/textures/2k_venus.jpg');

    const planet: TPlanet = {
        name: "Venus",
        radius: 0.9,
        distance: 18,
        speed: 0.012,
        ring: null,
        atmosphere: {
          radius: 1.05,
          color: "#f5deb3",
          opacity: 0.3,
          emissive: "orange",
          emissiveIntensity: 0.8,
        },
        moons: [],
        texture: venusTexture,
      };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

Venus.displayName = "Venus";

export default Venus;