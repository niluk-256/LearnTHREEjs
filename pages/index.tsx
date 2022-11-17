import  type {NextPage} from "next"
import { Canvas, useLoader, useThree} from "@react-three/fiber"
import AnimationBox from "../components/Ground"
import Light from  "../components/Light"
import { OrbitControls , Stats ,useAnimations,useGLTF  } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useEffect ,useState ,useRef  } from "react"
import { useInputs } from "../hooks/inputs"
import MyPlayer from "../components/Player"
import MyText from "../components/Font"






const Home: NextPage =() => {
  const testing = true





  return (
      <div className="container" >
     <Canvas shadows  camera={{ position: [-5, 5, 10] }} >
      
      {testing ? <Stats/> : null}
      {/* {testing ? <axesHelper />: null} */}
      {testing ? <gridHelper scale={[10,10,10]} />: null}
      
      <OrbitControls/>
            <Light/>
            <MyPlayer/>
            <MyText/>
          
     <AnimationBox isTesting={testing}/>
     </Canvas>
    </div>
  )
}
export default  Home