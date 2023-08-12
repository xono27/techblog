import useFirstMount from "@/customHooks/useFirstMount";
import React, { CSSProperties } from "react";
// import useFirstMount from "../../customHook/useFirstMount"

interface Props {
  children: React.ReactNode;
}

const PageExplain: React.FC<Props> = ({ children }) => {
  const { isMount } = useFirstMount();

  const style: CSSProperties = {
    transform: isMount ? "translateY(-3rem)" : "translateY(0)",
    opacity: isMount ? 0.8 : 0,
  };

  return (
    <p
      style={style}
      className="mt-36 mx-auto transition-all duration-300 delay-200 ease-linear w-1/2 leading-loose font-serif text-white text-5.5xl"
    >
      {children}
    </p>
  );
};

export default PageExplain;
