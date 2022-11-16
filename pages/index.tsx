import  type {NextPage} from "next"
import { Canvas, useLoader, useThree} from "@react-three/fiber"
import AnimationBox from "../components/Ground"
import Light from  "../components/Light"
import { OrbitControls , Stats ,useAnimations,useGLTF  } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useEffect } from "react"


const MyPlayer =()=>{
  const model = useLoader(GLTFLoader ,"./models/untitled.glb")
  const {actions} = useAnimations(model.animations,model.scene)

  model.scene.scale.set(0.5,0.5,0.5)
  model.scene.traverse((object)=>{
     {
      object.castShadow =true
     }
  })



  console.log(model)
  useEffect(()=>{
    actions?.idle?.play()
  })

  return <primitive object={model.scene}/>
}









const Home: NextPage =() => {
  const testing = true
  return (
      <div className="container" >
     <Canvas shadows >
      
      {testing ? <Stats/> : null}
      {testing ? <axesHelper />: null}
      {testing ? <gridHelper scale={[10,10,10]} />: null}
      
      <OrbitControls/>
            <Light/>
            <MyPlayer/>
     <AnimationBox isTesting={testing}/>
     </Canvas>
    </div>
  )
}
export default  Home