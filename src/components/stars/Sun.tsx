import { useTexture } from "@react-three/drei";
import { TStar } from "../../utils/types";
import { forwardRef, RefObject } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Sun = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const sunTexture = useTexture('/assets/textures/2k_sun.jpg');

    const sun: TStar = {
        name: "Sun",
        radius: 6,
        rotationSpeed: 0.004,
        texture: sunTexture,
    };

    useFrame((state, delta) => {
        const adjustSpeed = 0.05;

        meshRef.current.rotateY(sun.rotationSpeed * adjustSpeed);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[sun.radius, 35, 35]} />
            <meshBasicMaterial map={sun.texture} />
        </mesh>
    );
});

Sun.displayName = "Sun";

export default Sun;
