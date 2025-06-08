import { Canvas, useFrame } from '@react-three/fiber';
import DevHelpers from './helpers/DevHelpers';
import { PerspectiveCamera as TPerspectiveCamera } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Sun from './components/stars/Sun';
import { useEffect, useRef, useState } from 'react';
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
import axios from 'axios';
import { API_URL } from './utils/constants';
import { TPlanet, TPlanetsResponse } from './utils/types';

const Init = ({ planets } : { planets : TPlanet[]}) => {
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
			<Mercury ref={mercuryRef} planet={ planets.find((planet : TPlanet) => planet.name == "Mercury") as TPlanet } />
			<Venus ref={venusRef} planet={ planets.find((planet : TPlanet) => planet.name == "Venus") as TPlanet } />
			<Earth ref={earthRef} planet={ planets.find((planet : TPlanet) => planet.name == "Earth") as TPlanet } />
			<Mars ref={marsRef} planet={ planets.find((planet : TPlanet) => planet.name == "Mars") as TPlanet } />
			<Jupiter ref={jupiterRef} planet={ planets.find((planet : TPlanet) => planet.name == "Jupiter") as TPlanet } />
			<Saturn ref={saturnRef} planet={ planets.find((planet : TPlanet) => planet.name == "Saturn") as TPlanet } />
			<Uranus ref={uranusRef} planet={ planets.find((planet : TPlanet) => planet.name == "Uranus") as TPlanet } />
			<Neptune ref={neptuneRef} planet={ planets.find((planet : TPlanet) => planet.name == "Neptune") as TPlanet } />
		</>
	);
}

function App() {
	const cameraRef = useRef<TPerspectiveCamera>(null);
    const [data, setData] = useState<TPlanetsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        axios.get(API_URL)
            .then(response => {
                console.log(`API URL: ${API_URL}`, "Response", response.data);
                setData(response.data)
            })
            .catch(error => console.error("Axios error:", error))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading Planets...</div>;
    }

    const planets : TPlanet[] = data?.data.content ?? [];

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

                <Init planets={planets} />
            </Canvas>
		</div>
	);
}

export default App;
