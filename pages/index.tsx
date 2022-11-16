import  type {NextPage} from "next"
import { Canvas, useThree} from "@react-three/fiber"
import AnimationBox from "../components/AnimatedBox"

import { OrbitControls , Stats } from "@react-three/drei"


const Home: NextPage =() => {
  const testing = true
  return (
      <div className="container" >
     <Canvas>
      <axesHelper visible={testing}/>
      <OrbitControls/>
            <ambientLight intensity={0.1} />
  <directionalLight color="blue" position={[0, 0, 5]} />
     <AnimationBox/>
     </Canvas>
    </div>
  )
}
export default  Home