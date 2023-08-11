import React from "react";
import BrowseOption from "../atoms/BrowseOption";
import useCurrentOption from "@/customHooks/useCurrentOption";

interface Props {
  showOptions: boolean;
}

const BrowseOptions: React.FC<Props> = ({ showOptions }) => {
  const options = ["Blog", "About Me", "My Skill"];
  const { currentOption, setOption } = useCurrentOption();
  console.log(currentOption);

  const clickHandler = (index: number) => {
    setOption(index);
  };
  return (
    <div className="mt-8 ml-10">
      {options.map((option, index) => {
        return (
          <BrowseOption
            text={option}
            key={option}
            index={index}
            currentNumber={currentOption}
            clickHandler={clickHandler}
          />
        );
      })}
    </div>
  );
};

export default BrowseOptions;
