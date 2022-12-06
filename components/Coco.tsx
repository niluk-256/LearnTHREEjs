// import { useAnimations } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
// import { useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const  MyCoco =()=>{
  
  // const [active, setActive] = useState(false)
  const model = useLoader(GLTFLoader ,"./models/coco.glb")
  
   
  model.scene.scale.set(10,10,10)
  // model.scene.traverse((object)=>{
  //    { 
  //     object.castShadow =true
  //    }
  // })
 
  console.log(model)
return (
    <object3D position={[-80,0,-150]}>
        <primitive object={model.scene}  />

    </object3D>
)

}
  export default MyCoco