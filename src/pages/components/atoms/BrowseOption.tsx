import React from "react";

interface Props {
  text: string;
  index: number;
  currentNumber: number;
  clickHandler: (index: number) => void;
}

const BrowseOption: React.FC<Props> = ({
  text,
  index,
  currentNumber,
  clickHandler,
}) => {
  let isSelected: boolean = currentNumber === index;
  return (
    <button
      onClick={() => clickHandler(index)}
      className={`md:text-7xl ml-16 relative text-5xl block mb-6 typing-text text-left ${
        isSelected
          ? "text-blue-400 border-b-2 border-solid border-blue-400"
          : "text-white"
      }`}
    >
      {isSelected && <span className="absolute -left-14">&gt;</span>}
      {text}
    </button>
  );
};

export default BrowseOption;
