import { Html, useTexture } from "@react-three/drei";
import { TStar } from "../../utils/types";
import { forwardRef, RefObject, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { adjustSpeed } from "../../utils/configs";

const Sun = forwardRef<Mesh, {}>((_, ref) => {
    const meshRef = ref as RefObject<Mesh>;
    const sunTexture = useTexture('/assets/textures/2k_sun.jpg');
    const [hover, setHover] = useState<boolean>(false);

    const star: TStar = {
        name: "Sun",
        radius: 6,
        rotationSpeed: 0.004,
        texture: sunTexture,
    };

    useFrame(() => {
        meshRef.current?.rotateY(star.rotationSpeed * adjustSpeed);
    });

console.log(hover);
    return (
        <group ref={ref}>
            <mesh onPointerOver={() => { setHover(true) }} onPointerOut={ () => { setHover(false) } }>
                <sphereGeometry args={[star.radius, 35, 35]} />
                <meshBasicMaterial map={star.texture} />
            </mesh>
            { hover && 
                <Html
                    position={[0, star.radius + 0.5, 0]} // float label above the planet
                    style={{
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '150px',
                    }}
                    className="bg-black/5 text-white p-4 round-lg text-lg"
                    center
                    distanceFactor={10}
                    occlude
                >
                    { star.name }
                </Html>
            }
        </group>
    );
});

Sun.displayName = "Sun";

export default Sun;
