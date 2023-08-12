import React from "react"
import PageExplain from "../shared/PageExplain"
import PageTitle from "../shared/PageTitle"

const SkillsPageTop: React.FC = () => {
  return (
    <section className="w-full h-screen bg-black">
      <PageTitle value="Skills" />
      <PageExplain>
        スキルについての詳細ページ。どのようなアプリケーションの制作経験があるのか、開発歴等について記載しております。
      </PageExplain>
    </section>
  )
}

export default SkillsPageTop
