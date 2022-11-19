import { useAnimations } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const  MyFlag =()=>{
  
  // const [active, setActive] = useState(false)
  const model = useLoader(GLTFLoader ,"./models/sri.glb")
  const {actions} = useAnimations(model.animations,model.scene)
   
  model.scene.scale.set(2,2,2)
  // model.scene.traverse((object)=>{
  //    { 
  //     object.castShadow =true
  //    }
  // })
  useEffect(()=>{
     actions?.wave?.play()
  })
  console.log(model)
return (
    <object3D position={[2,0,0]}>
        <primitive object={model.scene}  />

    </object3D>
)

}
  export default MyFlag