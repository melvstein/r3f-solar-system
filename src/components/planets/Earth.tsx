import { forwardRef, RefObject } from "react";
import { TPlanet } from "../../utils/types";
import { Mesh } from "three";
import Planet from "./Planet";
import { useTexture } from "@react-three/drei";

const Earth = forwardRef<Mesh, {}>((_, ref) => {
	const meshRef = ref as RefObject<Mesh>;
	const earthTexture = useTexture("/assets/textures/2k_earth_daymap.jpg");
	const moonTexture = useTexture("/assets/textures/2k_moon.jpg");

	const planet: TPlanet = {
		name: "Earth",
		radius: 1,
		distance: 26,
		speed: 0.01,
		ring: null,
		moons: [
			{
				name: "Moon",
				radius: 0.27,
				distance: 3,
				speed: 0.03,
				texture: moonTexture,
			},
		],
		texture: earthTexture,
	};

	return (
		<Planet ref={meshRef} planet={planet} />
	);
});

Earth.displayName = "Earth";

export default Earth;
