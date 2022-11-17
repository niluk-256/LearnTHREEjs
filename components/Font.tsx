import { useAnimations } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const  MyText =()=>{
  
  // const [active, setActive] = useState(false)
  const model = useLoader(GLTFLoader ,"./models/text.glb")
  const {actions} = useAnimations(model.animations,model.scene)

  model.scene.scale.set(1,1,1)
  model.scene.traverse((object)=>{
     { 
      object.castShadow =true
     }
  })
return (
    <object3D position={[2,2,-10]}>
        <primitive object={model.scene}  />

    </object3D>
)

}
  export default MyText