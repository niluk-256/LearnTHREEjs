import { OrbitControls, useAnimations } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useInputs } from "../hooks/inputs";
import * as THREE from "three";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternaion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

// type Props ={

//     forward :boolean,backward:boolean , left : boolean , right:boolean
// }

const directions = ({ forward, backward, left, right }) =>
  // :{forward:boolean , backward:boolean,left:boolean,right:boolean}
  {
    var directionOffset = 0;

    if (forward) {
      if (left) {
        directionOffset = Math.PI / 4;
      } else if (right) {
        directionOffset = -Math.PI / 4;
      }
    }
    //---------
    if (backward) {
      if (left) {
        directionOffset = Math.PI / 4 + Math.PI / 2;
      } else if (right) {
        directionOffset = -Math.PI / 4 - Math.PI / 2;
      } else {
        directionOffset = Math.PI;
      }
    } else if (left) {
      directionOffset = Math.PI / 2;
    } else if (right) {
      directionOffset = -Math.PI / 2;
    }

    return directionOffset;
  };

const MyPlayer = () => {
  const { forward, backward, left, right, jump, run } = useInputs();
  // const [active, setActive] = useState(false)
  const model = useLoader(GLTFLoader, "./models/untitled.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  model.scene.scale.set(0.5, 0.5, 0.5);
  model.scene.traverse((object) => {
    {
      object.castShadow = true;
    }
  });

  const currentAction = useRef("");
  const controlRef = useRef();
  const camera = useThree((state) => state.camera);

  const updateCamera = (moveX, moveZ) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;

    //updatecam'camera

    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 2;
    cameraTarget.z = model.scene.position.z;
    if (controlRef.current) controlRef.current.target = cameraTarget;
  };

  console.log(model);
  useEffect(() => {
    let action = "";

    if (forward || left || right || backward) {
      action = "walking";
      if (run) {
        action = "run";
      }
    } else if (jump) {
      action = "Backflip";
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, run, actions]);

  useFrame((state, delta) => {
    if (currentAction.current == "walking" || currentAction.current == "run") {
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );

      //move angle offset
      let directionsz = directions({
        forward,
        backward,
        left,
        right,
      });

      //rotate model
      rotateQuaternaion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + directionsz
      );
      model.scene.quaternion.rotateTowards(rotateQuaternaion, 0.1);

      //calculate directions
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, directionsz);
      //velocity
      const velocity = currentAction.current == "run" ? 10 : 5;
      //move camera

      const movex = walkDirection.x * velocity * delta;
      const movez = walkDirection.z * velocity * delta;
      model.scene.position.x += movex;
      model.scene.position.z += movez;
      updateCamera(movex, movez);
    }
  });
  return (
    <>
      <OrbitControls ref={controlRef} />
      <primitive object={model.scene} />
    </>
  );
};
export default MyPlayer;
