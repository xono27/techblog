import React from "react"
import SectionWrapper from "../shared/SectionWrapper"
import SectionSeparator from "../shared/SectionSeparator"
import AboutWork from "../works/AboutWork"
import WorkInfo from "../works/WorkInfo"
import TechLogo from "../skills/TechLogo"
import SkillLevelInfo from "./SkillLevelInfo"
import UsedTechs from "../works/UsedTechs"

const PHP: React.FC = () => {
  return (
    <SectionWrapper>
      <SectionSeparator value="PHP" />
      <TechLogo src="./php.png" />
      <AboutWork>
        <SkillLevelInfo skillLevel={4} />
        <WorkInfo itemName="使用歴" value="1年" />
        <WorkInfo
          itemName="使用経験"
          value="長期インターンシップでLaravelを用いて開発、修正を経験。個人開発ではログイン機能搭載の簡易掲示板作成経験あり。また、フレームワークLaravelとReactでWebアプリケーションの開発も経験"
        />
        <WorkInfo itemName="開発経験のあるフレームワーク" value={<UsedTechs logos={["/laravel.svg"]}/>}  />
      </AboutWork>
    </SectionWrapper>
  )
}

export default PHP
