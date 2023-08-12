import React from "react";
import { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}

const AboutWork: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const style: CSSProperties = {
    transform: inView ? "translateX(0)" : "translateX(-3rem)",
    opacity: inView ? 1 : 0,
  };

  return (
    <div
      style={style}
      ref={ref}
      className="shadow-2xl py-24 opacity-100 transition-all duration-500 ease-linear delay-300 relative bg-aboutWork z-10 sm:w-4/5 w-aboutWork mt-24 ml-20"
    >
      {children}
    </div>
  );
};

export default AboutWork;
