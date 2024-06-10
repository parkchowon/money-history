import { useRef, useState } from "react";

const useRefInput = (data) => {
  const inputRef = useRef(data);
  const [value, setValue] = useState(data);
  const handleRefInput = (e) => {
    inputRef.current = e.target.value;
    setValue(e.target.value);
  };

  return [inputRef, value, handleRefInput];
};

export default useRefInput;
