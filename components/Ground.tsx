
import { useFrame } from '@react-three/fiber'
import { useRef } from "react"
import { BoxHelper } from "three"
import { useHelper } from '@react-three/drei'

type Props ={
    isTesting : boolean
}

const AnimationBox: React.FC<Props> =( {isTesting}) =>{
    const meshRef =useRef<THREE.Mesh>(null)
   
  useHelper(  meshRef,BoxHelper,"grey" ) 
     
      
  
 

  return(
     <mesh  receiveShadow visible={true} ref={meshRef} scale ={[10,10,10]} rotation-x={Math.PI * -0.5}>
        <planeBufferGeometry  />
        {/* wireframe */}
        <meshStandardMaterial color={"lightgray"}  />   
      </mesh>
  )
}
export default AnimationBox