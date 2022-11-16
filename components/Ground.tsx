
import { useFrame } from '@react-three/fiber'
import { useRef } from "react"
import { BoxHelper } from "three"
import { useHelper } from '@react-three/drei'

type Props ={
    isTesting : boolean
}

const AnimationBox: React.FC<Props> =( {isTesting}) =>{
  //   const meshRef =useRef<THREE.Mesh>(null)
   
  // useHelper(  meshRef,BoxHelper,"grey" ) 
     
      
  
 

  return(
    // ref={meshRef}
     <mesh  receiveShadow visible={true}  scale ={[100,100,100]} rotation-x={Math.PI * -0.5}>
        <planeBufferGeometry  />
        {/* wireframe */}
        <meshStandardMaterial color={"gray"}  />   
      </mesh>
  )
}
export default AnimationBox