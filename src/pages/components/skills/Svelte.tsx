import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"
import UsedTechs from "../works/UsedTechs"


const Svelte: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="Svelte" />
      <TechLogo src="./sveltelogo.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={3} />
        <WorkInfo itemName="使用歴" value="半年" />
        <WorkInfo
          itemName="使用経験"
          value="ポートフォリオに記載のProgress ToDo をSvelte/Sapperで開発。その他にGoogle Books APIを用いた静的サイト等いくつかのアプリケーションを開発。"
        />
        <WorkInfo
          itemName="開発経験のあるフレームワーク"
          value={<UsedTechs logos={["/sapperlogo.png"]}/>}
        />
      </AboutWork>
    </SectionWrapper>
  )
}

export default Svelte