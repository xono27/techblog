import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"
import UsedTechs from "../works/UsedTechs"

const REACT: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="React" />
      <TechLogo src="./reactlogo.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={4.5} />
        <WorkInfo itemName="使用歴" value="2年" />
        <WorkInfo
          itemName="使用経験"
          value="当サイトに掲載しているアプリの多くをReact,あるいはそのフレームワークで開発。このサイトはGatsby.jsで開発。短期インターンで使用。"
        />
        <WorkInfo
          itemName="開発経験のあるフレームワーク"
          value={<UsedTechs logos={["/nextlogo.png","/blitzlogo.jpg","/gtblogo.png"]}/>}
        />
      </AboutWork>
    </SectionWrapper>
  )
}

export default REACT
