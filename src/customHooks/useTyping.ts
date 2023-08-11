import { useState } from "react";

const useTyping = (initMsg: string) => {
  const [message, setMessage] = useState(initMsg);
  const [key, setKey] = useState(0);
  const [inputRock, setRock] = useState(false);

  const typeStart = (text = "") => {
    setKey((state) => state + 1);
    setRock(true);
    setMessage(text);
  };
  const typeEnd = () => {
    setRock(false);
  };

  return {
    typeStart,
    typeEnd,
    inputRock,
    key,
    message,
  };
};

export default useTyping;
