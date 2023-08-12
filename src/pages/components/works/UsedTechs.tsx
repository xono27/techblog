import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  logos: string[];
}

const uniqueId = uuidv4();

const UsedTechs: React.FC<Props> = ({ logos }) => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center">
      {logos.map((src: string) => {
        return <img src={src} key={uuidv4()} alt="noLogo" className="w-3/5" />;
      })}
    </div>
  );
};

export default UsedTechs;
