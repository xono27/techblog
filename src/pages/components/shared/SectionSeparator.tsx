import React, { CSSProperties } from "react"
import { useInView } from "react-intersection-observer"

interface Props {
  value: string
}

const SectionSeparator: React.FC<Props> = ({ value }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  })
  const style: CSSProperties = {
    transform: inView ? "translateY(-2.5rem)" : "translateY(2.5rem)",
    opacity: inView ? 1 : 0,
  }

  return (
    <h2
      style={style}
      ref={ref}
      className={`pl-28 pt-24 relative w-1/4 z-10 font-serif text-homeSeparator`}
    >
      <p
        style={style}
        className="text-white delay-200 transition-all duration-700 ease-linear opacity-0 transform translate-y-0"
      >
        {value}
      </p>
    </h2>
  )
}

export default SectionSeparator
