import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"
import UsedTechs from "../works/UsedTechs"


const Vue: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="Vue" />
      <TechLogo src="./vue.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={1.5} />
        <WorkInfo itemName="使用歴" value="1か月" />
        <WorkInfo
          itemName="使用経験"
          value="最近やっと基礎的な参考書を一冊読み終えたところ。"
        />
        <WorkInfo
          itemName="開発経験のあるフレームワーク"
          value={<UsedTechs logos={["/nuxt.svg"]} />}
        />
      </AboutWork>
    </SectionWrapper>
  )
}

export default Vue