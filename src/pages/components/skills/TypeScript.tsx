import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"

const TypeScript: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="TypeScript" />
      <TechLogo src="./ts.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={3.5} />
        <WorkInfo itemName="使用歴" value="1年" />
        <WorkInfo
          itemName="使用経験"
          value="ReactやSvelteを用いたフロントエンド,サーバーサイド開発で使用。短期インターンで使用。"
        />
      </AboutWork>
    </SectionWrapper>
  )
}

export default TypeScript
