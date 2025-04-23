import { useControls } from 'leva';
import { useMemo } from 'react';
import { GizmoHelper, GizmoViewport } from '@react-three/drei';
import * as THREE from 'three';
import CameraCoordinatesHelper from './CameraCoordinatesHelper';

const value = 1000;

export const useOrbitControls = () => {
    const { orbitEnabled } = useControls({
        orbitEnabled: {
            value: true,
            label: "Enable Orbit"
        }
    });

    return orbitEnabled;
};

export const AxesControls = () => {
    const { showAxes, axesSize } = useControls({
        showAxes: {
            value: false,
            label: "Show Axes",
        },
        axesSize: {
            value: value,
            min: 1,
            max: 1000,
            step: 1,
            label: "Axes Size",
        }
    });

    return useMemo(() => {
        return showAxes ? (
          <primitive object={new THREE.AxesHelper(axesSize)} position={[0, 0.01, 0]} />
        ) : null;
    }, [showAxes, axesSize]);
};

export const GridControls = () => {
    const { showGrid, gridSize, gridDivisions } = useControls({
        showGrid: {
            value: false,
            label: "Show Grid",
        },
        gridSize: {
            value: value,
            min: 1,
            max: 1000,
            step: 1,
            label: "Grid size",
        },
        gridDivisions: {
            value: 100,
            min: 1,
            max: 1000,
            step: 1,
            label: "Grid Divisions",
        }
    });

    return useMemo(() => {
        return showGrid ? (
          <primitive object={new THREE.GridHelper(gridSize, gridDivisions)} position={[0, 0, 0]} />
        ) : null;
    }, [showGrid, gridSize, gridDivisions]);
}

export const GizmoControls = () => {
    return (
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
        </GizmoHelper>
    );
}

export const AmbientLightControls = () => {
    const { ambientLightIntensity } = useControls({
        ambientLightIntensity: {
            value: 0.2,
            min: 0.0,
            max: 1,
            step: 0.1,
            label: "Ambient Light Intensity",
        }
    });
    
    return useMemo(() => {
        return <ambientLight intensity={ambientLightIntensity} />
    }, [ambientLightIntensity]);
}

export const CameraCoordinatesControls = () => {
    const { cameraCoordinatesEnabled } = useControls(
        {
            cameraCoordinatesEnabled: {
                value: false,
                label: "Enable Camera Coordinates",
            }
        }
    );

    return useMemo(() => {
        return cameraCoordinatesEnabled && <CameraCoordinatesHelper />;
    }, [cameraCoordinatesEnabled]);
};

export default function DevHelpers() {
  return (
    <>
        <AxesControls />
        <GridControls />
        <GizmoControls />
        <AmbientLightControls />
        <CameraCoordinatesControls />
    </>
  );
}
