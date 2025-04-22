import { PointLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { PointLight } from 'three';
import { useRef } from 'react';

const LightWithHelper = () => {
    const lightRef = useRef<PointLight>(null!);

    useHelper(lightRef, PointLightHelper, 1);

    return (
        <pointLight
            ref={lightRef}
            position={[0, 0, 0]}
            intensity={4}
            color="white"
        />
    );
}

export default LightWithHelper;