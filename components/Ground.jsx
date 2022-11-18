import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";
import { useHelper } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

// type Props ={
//     isTesting : boolean
// }

const AnimationBox = ({ isTesting }) => {
  //   const meshRef =useRef<THREE.Mesh>(null)

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
      scale={[100, 100, 100]}
      rotation-x={Math.PI * -0.5}
    >
      <planeBufferGeometry />
      {/* wireframe */}
      <meshPhongMaterial color={"gray"} />
    </mesh>
  );
};
export default AnimationBox;
