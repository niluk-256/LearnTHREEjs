import React, { useRef } from 'react'
import { Canvas, useThree } from "@react-three/fiber"
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
function Light() {
    const lightRef = useRef<THREE.DirectionalLight>()
    useHelper(lightRef , DirectionalLightHelper , 5 , "gray")
  return (
    <><ambientLight intensity={0.1} />
  <directionalLight ref={lightRef} position={[0, 5, 10]} castShadow /></>
  )
}

export default Light