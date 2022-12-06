import  type {NextPage } from "next"
import { Canvas, useLoader, useThree} from "@react-three/fiber"
import AnimationBox from "../components/Ground"
import Light from  "../components/Light"
import {  OrbitControls, Stats ,useAnimations,useGLTF ,Loader  } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useEffect ,useState ,useRef  } from "react"
import { useInputs } from "../hooks/inputs"
import MyPlayer from "../components/Player.jsx"
import MyText from "../components/Font"
import { Physics } from "@react-three/cannon"
import MyFlag from "../components/Flag"
import MyKuluna from "../components/Pole"
import MyCoco from "../components/Coco"
import {Suspense} from "react"






const Home: NextPage =() => {
  const testing = true
 

  return (
      <div className="container" >
     <Canvas shadows  camera={{ position: [-5, 5, 10] }} >
      
      {testing ? <Stats/> : null}
      {/* {testing ? <axesHelper />: null} */}
      {testing ? <gridHelper scale={[100,100,100]} />: null}
      
       <Suspense fallback={null}>
            <Light/>
               <Physics
        gravity={[0, -9, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
 <AnimationBox isTesting={testing}/>

      </Physics>

            <MyPlayer/>
            <MyText  />
            <MyFlag  />
            <MyKuluna/>
            <MyCoco/>
</Suspense>
     </Canvas>
     <Loader/>
     
    </div>
  )
}
export default  Home