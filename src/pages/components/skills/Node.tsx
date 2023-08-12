import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"
import UsedTechs from "../works/UsedTechs"


const Node: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="Node.js" />
      <TechLogo src="./node.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={3.5} />
        <WorkInfo itemName="使用歴" value="2年" />
        <WorkInfo
          itemName="使用経験"
          value="SvelteやReactを使ったサービスのサーバー開発で使用経験あり。スクレイピング、ストリームや非同期処理について学んだ経験あり。"
        />
        <WorkInfo itemName="開発経験のあるフレームワーク" value={<UsedTechs logos={["/expresslogo.png"]}/>} />
      </AboutWork>
    </SectionWrapper>
  )
}

export default Node