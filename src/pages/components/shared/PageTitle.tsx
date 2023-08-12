import useFirstMount from "@/customHooks/useFirstMount";
import React, { useEffect, FC, useState, CSSProperties } from "react";

interface Props {
  value: string;
}

const PageTitle: FC<Props> = ({ value }) => {
  const { isMount } = useFirstMount();

  const spanStyle: CSSProperties = {
    transform: isMount ? "scaleX(1)" : "scaleX(0)",
    height: "1.5px",
    transformOrigin: "center",
  };

  const h1Style: CSSProperties = {
    transform: isMount ? "translateY(-3rem)" : "translateY(0)",
    opacity: isMount ? 1 : 0,
  };

  return (
    <>
      <h1
        style={h1Style}
        className="text-9xl w-3/5 mx-auto pb-4 relative transition-all duration-300 ease-linear text-white font-serif text-center pt-64"
      >
        {value}
        <span
          style={spanStyle}
          className="pageTopUnderline scale-x-0 bottom-0 transition-all duration-300 delay-200 ease-linear"
        ></span>
      </h1>
    </>
  );
};

export default PageTitle;
