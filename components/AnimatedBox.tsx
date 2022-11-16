
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
     
      
  
 
useFrame(()=>{
    console.log("hi")
    if(meshRef.current){

      meshRef.current.rotation.x += 0.01
    }
  })
  return(
     <mesh visible={true} ref={meshRef} scale ={[0.5,0.5,0.5]}>
        <boxGeometry />
        <meshStandardMaterial/>
      </mesh>
  )
}
export default AnimationBox