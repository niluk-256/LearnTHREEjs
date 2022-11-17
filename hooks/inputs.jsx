import { useEffect, useState } from "react";
export const useInputs = () => {
  const [inputs, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    jump: false,
    run: false,
    side: false,
    right: false,
  });

  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
    ShiftLeft: "run",
  };
  const findKey = (key) => keys[key];

  useEffect(() => {
    const handleDown = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    };
    const handleUp = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    };
    //---------------------mobile
    const handleDownmob = (e) => {
      setInput((m) => ({ ...m, forward: true }));
    };
    const handleUpmob = (e) => {
      setInput((m) => ({ ...m, forward: false }));
    };
    document.addEventListener("touchstart", handleDownmob);
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    return () => {
      document.removeEventListener("keydown", handleDown);
      document.removeEventListener("keyup", handleUp);
      document.addEventListener("touchend", handleUpmob);
    };
  });
  return inputs;
};
