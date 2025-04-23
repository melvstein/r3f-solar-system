import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useState } from 'react'

const CameraCoordinatesHelper = () => {
    const { camera } = useThree();
    const [position, setPosition] = useState<{ x: number | string; y: number | string, z: number | string }>({ x: 0, y: 0, z: 0 });

    useFrame(() => {
        setPosition({
        x: camera.position.x.toFixed(2),
        y: camera.position.y.toFixed(2),
        z: camera.position.z.toFixed(2),
        });

        // Optional console log
        // console.log("Camera position:", camera.position);
    });
    
    return (
        <Html>
        <div className="fixed top-4 left-4 text-white bg-white/10 p-3 rounded-lg backdrop-blur-md w-max pointer-events-auto" >
          <div className='whitespace-nowrap'>Camera Position:</div>
          <div className='flex items-center justify-between p-2'>
            <span>X:</span>
            <span>{position.x}</span>
          </div>
          <div className='flex items-center justify-between p-2'>
            <span>Y:</span>
            <span>{position.y}</span>
          </div>
          <div className='flex items-center justify-between p-2'>
            <span>Z:</span>
            <span>{position.z}</span>
          </div>
        </div>
      </Html>
    )
}

export default CameraCoordinatesHelper;