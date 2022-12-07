import { useAnimations } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const  MyKuluna =()=>{
  
  // const [active, setActive] = useState(false)
  const model = useLoader(GLTFLoader ,"./models/nk.glb")
  
   
  model.scene.scale.set(2,2,2)
  model.scene.traverse((object)=>{
     { 
      object.castShadow =true
     }
  })
 
  console.log(model)
return (
    <object3D position={[300,0,-200]} >
      <pointLight position={[-20, -50, 50]} intensity = {10}  />
        <primitive object={model.scene}  />

    </object3D>
)

}
  export default MyKuluna