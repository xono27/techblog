import { useEffect, useState } from "react";

const useCurrentOption = () => {
  const [currentOption, setCurrentOption] = useState<number>(0);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        toBack();
        break;
      case "ArrowDown":
        toNext();
        break;
      case "Enter":

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const setOption = (newOption: number) => {
    setCurrentOption(newOption);
  };

  const toNext = () => {
    if (currentOption !== 2) {
      setCurrentOption((prevState) => prevState + 1);
    }
  };

  const toBack = () => {
    if (currentOption !== 0) {
      setCurrentOption((prevState) => prevState - 1);
    }
  };

  return {
    currentOption,
    setOption,
    toNext,
    toBack,
  };
};

export default useCurrentOption;
