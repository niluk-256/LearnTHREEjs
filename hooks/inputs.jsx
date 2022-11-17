import { useEffect, useState } from "react";
export const useInputs = () => {
  const [inputs, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    jump: false,
    right: false,
  });

  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
  };
  const findKey = (key) => keys[key];

  useEffect(() => {
    const handleDown = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    };
    const handleUp = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    };
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    return () => {
      document.removeEventListener("keydown", handleDown);
      document.removeEventListener("keyup", handleUp);
    };
  });
  return inputs;
};
