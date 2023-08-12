import React from "react"
import { CSSProperties } from "react"
import { useInView } from "react-intersection-observer"

interface Props {
  src: string
}

const TechLogo: React.FC<Props> = ({ src }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  const style: CSSProperties = {
    opacity: inView ? 0.4 : 0,
  }
  return (
    <img
      ref={ref}
      style={style}
      src={src}
      className="absolute top-32 z-0 transform transition-all ease-linear duration-500 delay-200 left-1/2 sm:-translate-x-1/4 -translate-x-1/3 w-3/5 "
    />
  )
}

export default TechLogo

// h-techImage
