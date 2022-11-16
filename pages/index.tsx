import  type {NextPage} from "next"
import { Canvas, ThreeElements } from "@react-three/fiber"
import AnimationBox from "../components/AnimatedBox"




const Home: NextPage =() => {
  
  return (
      <div className="container" >
     <Canvas>
            <ambientLight intensity={0.1} />
  <directionalLight color="blue" position={[0, 0, 5]} />
     <AnimationBox/>
     </Canvas>
    </div>
  )
}
export default  Home