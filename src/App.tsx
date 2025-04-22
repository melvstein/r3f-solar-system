import { Canvas, useFrame } from '@react-three/fiber';
import DevHelpers from './components/DevHelpers';
import { PerspectiveCamera as TPerspectiveCamera } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Sun from './components/stars/Sun';
import { useRef } from 'react';
import Earth from './components/planets/Earth';
import { Mesh } from 'three';

const Init = () => {
	const sunRef = useRef<Mesh>(null);
	const earthRef = useRef<Mesh>(null);


	return (
		<>
			<Sun ref={sunRef} />
			<Earth ref={earthRef} />
		</>
	);
}

function App() {
	const cameraRef = useRef<TPerspectiveCamera>(null);

	return (
		<div className="canvas-container">
			<Canvas>
				<DevHelpers />
				<OrbitControls  />
				<PerspectiveCamera ref={cameraRef} position={[0, 50, 50]} fov={75} makeDefault />
				<ambientLight intensity={0.3} />
				<pointLight position={[0, 0, 0]} intensity={2000} color={0xffffff} />
				
				<Init />
			</Canvas>
		</div>
	);
}

export default App;
