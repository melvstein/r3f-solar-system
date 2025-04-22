import { useControls } from 'leva';
import { useMemo } from 'react';
import { GizmoHelper, GizmoViewport } from '@react-three/drei';
import * as THREE from 'three';

export default function DevHelpers() {
  const value = 1000;

  const { showAxes, showGrid, axesSize, gridSize, gridDivisions } = useControls('Dev Helpers', {
    showAxes: true,
    axesSize: { value: value, min: 1, max: 1000, step: 1 },
    showGrid: true,
    gridSize: { value: value, min: 1, max: 1000, step: 1 },
    gridDivisions: { value: value, min: 1, max: 1000, step: 1 },
  });

  const axesHelper = useMemo(() => {
    return showAxes ? (
      <primitive object={new THREE.AxesHelper(axesSize)} position={[0, 0.01, 0]} />
    ) : null;
  }, [showAxes, axesSize]);

  const gridHelper = useMemo(() => {
    return showGrid ? (
      <primitive object={new THREE.GridHelper(gridSize, gridDivisions)} position={[0, 0, 0]} />
    ) : null;
  }, [showGrid, gridSize, gridDivisions]);

  return (
    <>
      {axesHelper}
      {gridHelper}
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
      </GizmoHelper>
    </>
  );
}
