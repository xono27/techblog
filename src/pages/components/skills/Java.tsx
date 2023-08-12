import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"

const Java: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="Java" />
      <TechLogo src="./java.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={1} />
        <WorkInfo itemName="使用歴" value="6か月" />
        <WorkInfo
          itemName="使用経験"
          value="文法、オブジェクト指向について3冊程の参考書で学んだのが主で、開発の経験はほとんどなし。"
        />
      </AboutWork>
    </SectionWrapper>
  )
}

export default Java
