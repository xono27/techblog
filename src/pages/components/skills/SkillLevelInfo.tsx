import React from "react";
import { useInView } from "react-intersection-observer";
import SkillLevelBar from "../shared/SkillLevelBar";
import WorkInfo from "../works/WorkInfo";

interface Props {
  skillLevel: number;
}

const SkillLevelInfo: React.FC<Props> = ({ skillLevel }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });
  return (
    <WorkInfo
      itemName="レベル"
      value={
        <>
          <span className="absolute right-12 text-5xl">{skillLevel}</span>
          <div ref={ref} className="h-4 w-11/12 relative pr-12 z-10 ">
            <SkillLevelBar
              skillLevel={skillLevel}
              delay={100}
              shouldAppear={inView}
            />
          </div>
        </>
      }
    />
  );
};

export default SkillLevelInfo;
