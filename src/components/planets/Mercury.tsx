import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Mercury = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const mercuryTexture = useTexture('/assets/textures/2k_mercury.jpg');

    const planet: TPlanet = {
        name: "Mercury",
        radius: 0.5,
        distance: 10,
        speed: 0.017,
        ring: null,
        moons: [],
        texture: mercuryTexture,
    };

    return (
        <Planet ref={meshRef} planet={planet} />
    );
});

Mercury.displayName = "Mercury";

export default Mercury;