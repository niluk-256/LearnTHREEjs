import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";
import { useHelper, useTexture } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

// type Props ={
//     isTesting : boolean
// }

const AnimationBox = ({ isTesting }) => {
  //   const meshRef =useRef<THREE.Mesh>(null)
  // const map = useTexture("./textures/rock_wall_04_diff_1k.jpg");
  // const map = useTexture("./textures/coast_sand_rocks_02_rough_1k.png");

  // useHelper(  meshRef,BoxHelper,"grey" )

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.25, 0],
    material: {
      friction: 0.1,
    },
  }));

  return (
    // ref={meshRef}

    <mesh
      receiveShadow={true}
      ref={ref}
      visible={true}
      scale={[1000, 1000, 1000]}
      rotation-x={Math.PI * -0.5}
    >
      <planeBufferGeometry />

      {/* wireframe */}
      <meshPhongMaterial color="#1e90ff"  opacity={0.8} />
    </mesh>
  );
};
export default AnimationBox;
