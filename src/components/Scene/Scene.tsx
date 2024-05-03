import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Lines from "../Lines";
import Audio from "../../components/Audio";
import { useCustomControls, useIsMobile } from "../../hooks";
import Loader from "../../components/Loader";

const Scene = () => {
	const controls = useCustomControls();

	return (
		<>
			<Suspense fallback={<Loader />}>
				<color
					args={[controls.scene.fogAndBg]}
					attach="background"
				></color>
				<OrbitControls />
				<fogExp2
					attach="fog"
					color={controls.scene.fogAndBg}
					density={controls.scene.fogDensity / 100}
				/>
				<Audio />
				<Lines />
			</Suspense>
		</>
	);
};

export default Scene;
