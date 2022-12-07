import React, { useRef } from 'react'
import { Canvas, useThree } from "@react-three/fiber"
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper ,DirectionalLightShadow} from 'three'
function Light() {
    // const lightRef = useRef<THREE.DirectionalLight>()
    // useHelper(lightRef , DirectionalLightHelper  , 5 , "gray")
  return (
    <><ambientLight intensity={0.2} />
    
        {/* <directionalLight
      castShadow
      position={[2.5, 8, 5]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    /> */}

    {/* ref={lightRef} */}
  <directionalLight 
  // ref={lightRef}
  intensity={0.5}
  castShadow
 shadow-mapSize={[1024, 1024]}

   scale={[10,10,10]}   position={[30, 60, -200]} >
    <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
    </directionalLight>
    </>
  )
}

export default Light