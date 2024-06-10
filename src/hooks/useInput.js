import { useState } from "react";

const useInput = (init) => {
  const [value, setValue] = useState(init);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const setBlank = () => {
    setValue("");
  };
  return [value, handleInput, setBlank];
};

export default useInput;
