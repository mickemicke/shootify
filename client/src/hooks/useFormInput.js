import { useState } from "react";

const useFormInput = (initialValue) => {
  const [input, setInput] = useState(initialValue || {});
  const handleChange = (event) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setInput({ [name]: value });
  };

  return [input, handleChange];
};

export default useFormInput;
