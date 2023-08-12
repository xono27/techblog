import React, { CSSProperties } from "react"

interface Props {
  shouldAppear: boolean
  delay: number
  skillLevel: number
}

const SkillLevelBar: React.FC<Props> = ({
  shouldAppear,
  delay,
  skillLevel,
}) => {
  const style: CSSProperties = {
    width: shouldAppear ? `${20 * skillLevel}%` : "0%",
  }
  return (
    <span
      style={style}
      className={`inline-block ease-linear delay-${delay} shadow-skillBar transition-all duration-1000 h-full bg-purple-700 rounded-2xl`}
    ></span>
  )
}

export default SkillLevelBar
