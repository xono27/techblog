import React from "react";

interface Props {
  pageId?: string;
  children: React.ReactNode;
}

const HomeCategoryWrapper: React.FC<Props> = ({
  children,
  pageId = "NONE",
}) => {
  return (
    <div
      id={pageId}
      className={`bg-black font-serif w-full pb-80 overflow-hidden relative`}
    >
      {children}
    </div>
  );
};

export default HomeCategoryWrapper;
