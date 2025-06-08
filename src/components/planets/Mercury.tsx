import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { TPlanet } from "../../utils/types";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Mercury = forwardRef<Mesh, { planet : TPlanet}>(({ planet } , ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const mercuryTexture = useTexture('/assets/textures/2k_mercury.jpg');

    if (planet == null) {
        console.log("Mercury from API is empty");

        planet = {
            name: "Mercury",
            radius: 0.5,
            distance: 10,
            speed: 0.017,
            atmosphere: null,
            ring: null,
            moons: [],
        };
    }

    return (
        <Planet ref={meshRef} planet={planet} texture={mercuryTexture}/>
    );
});

Mercury.displayName = "Mercury";

export default Mercury;