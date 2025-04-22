import { useCubeTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const GalaxyBackground = () => {
    const { scene } = useThree();
    const bgTexture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/assets/textures/cubeMaps/' }
    );

    scene.background = bgTexture;

    return null;
}

export default GalaxyBackground;