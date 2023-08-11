import React, { useState, useEffect } from "react";
import BrowseOptions from "../molecules/BrowseOptions";

interface Props {
  message: string;
  typeEnd: () => void;
  className: string;
  speed: number;
  showOptions: boolean;
}

const CommandDisplay: React.FC<Props> = ({
  message,
  typeEnd,
  className = "",
  speed = 50,
  showOptions,
}) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText("");
    // マウント時の処理
    const charItr = message[Symbol.iterator]();
    let timerId: any;

    (function showChar() {
      const nextChar = charItr.next();
      if (nextChar.done) {
        typeEnd();
        return;
      }
      setText((current) => current + nextChar.value);
      timerId = setTimeout(showChar, speed);
    })();

    // アンマウント時に念のためタイマー解除
    return () => clearTimeout(timerId);
  }, [message, speed]);
  return (
    <section className="relative w-full ">
      <p
        className="md:text-7xl text-5xl typing-text flex h-vauto text-left text-white"
        // dangerouslySetInnerHTML={{ __html: text }}
      >
        {text}
        &nbsp;
        <span
          className={`${
            showOptions && "hidden"
          } h-[1em] w-1 bg-white animate-blink`}
        ></span>
      </p>
      {showOptions && <BrowseOptions showOptions />}
    </section>
  );
};

export default CommandDisplay;
{
  /* <span className="inline-block h-full w-1 bg-white"></span> */
}
