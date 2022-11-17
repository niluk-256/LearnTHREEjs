import React, { useRef } from 'react'
import { Canvas, useThree } from "@react-three/fiber"
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
function Light() {
    // const lightRef = useRef<THREE.DirectionalLight>()
    // useHelper(lightRef , DirectionalLightHelper , 5 , "gray")
  return (
    <><ambientLight intensity={0.1} />
    {/* ref={lightRef} */}
  <directionalLight 
  shadow-mapSize-height ={1000}
  shadow-mapSize-width ={1000}
  shadow-camera-right={20}
  shadow-camera-left={-20}
  shadow-camera-top={20}
  shadow-camera-bottom={-20}

   scale={[10,10,10]}   position={[50, 30, -100]} castShadow /></>
  )
}

export default Light