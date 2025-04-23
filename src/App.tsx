import { Canvas, useFrame } from '@react-three/fiber';
import DevHelpers from './helpers/DevHelpers';
import { PerspectiveCamera as TPerspectiveCamera } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Sun from './components/stars/Sun';
import { useRef } from 'react';
import Earth from './components/planets/Earth';
import { Mesh } from 'three';
import Mercury from './components/planets/Mercury';
import Venus from './components/planets/Venus';
import Mars from './components/planets/Mars';
import Jupiter from './components/planets/Jupiter';
import Saturn from './components/planets/Saturn';
import Uranus from './components/planets/Uranus';
import Neptune from './components/planets/Neptune';
import GalaxyBackground from './components/GalaxyBackground';

const Init = () => {
	const sunRef = useRef<Mesh>(null);
	const mercuryRef = useRef<Mesh>(null);
	const venusRef = useRef<Mesh>(null);
	const earthRef = useRef<Mesh>(null);
	const marsRef = useRef<Mesh>(null);
	const jupiterRef = useRef<Mesh>(null);
	const saturnRef = useRef<Mesh>(null);
	const uranusRef = useRef<Mesh>(null);
	const neptuneRef = useRef<Mesh>(null);

	useFrame(() => {
		
	});

	return (
		<>
			<Sun ref={sunRef} />
			<Mercury ref={mercuryRef} />
			<Venus ref={venusRef} />
			<Earth ref={earthRef} />
			<Mars ref={marsRef} />
			<Jupiter ref={jupiterRef} />
			<Saturn ref={saturnRef} />
			<Uranus ref={uranusRef} />
			<Neptune ref={neptuneRef} />
		</>
	);
}

function App() {
	const cameraRef = useRef<TPerspectiveCamera>(null);

	return (
		<div className="canvas-container">
			<Canvas>
				{/* <CameraCoordinateHelper /> */}
				<OrbitControls />
				<DevHelpers />
				<PerspectiveCamera ref={cameraRef} position={[0, 120, 120]} fov={75} makeDefault />
				<ambientLight intensity={0.1} />
				<pointLight position={[0, 0, 0]} intensity={2000} color={0xffffff} />
				<GalaxyBackground />
				<Init />
			</Canvas>
		</div>
	);
}

export default App;
