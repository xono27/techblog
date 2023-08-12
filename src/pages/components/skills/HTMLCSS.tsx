import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"
import UsedTechs from "../works/UsedTechs"


const HTMLCSS: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="HTML & CSS" />
      <TechLogo src="./htmlcss.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={4.5} />
        <WorkInfo itemName="使用歴" value="2年半" />
        <WorkInfo
          itemName="使用経験"
          value="フロントエンド開発におけるあらゆるアプリの開発に使用。長期インターン・短期インターンでの開発経験あり。"
        />
        <WorkInfo
          itemName="開発経験のあるフレームワーク"
          value={<UsedTechs logos={["/mulogo.png","/tailwindlogo.png"]}/>}
        />
      </AboutWork>
    </SectionWrapper>
  )
}

export default HTMLCSS
