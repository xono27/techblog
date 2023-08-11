import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/organisms/Header";
import Navigation from "./components/organisms/Navigation";
import MainContent from "./components/organisms/MainContent";
import CommandDisplay from "./components/organisms/CommandDisplay";
import useTyping from "@/customHooks/useTyping";
import { useCallback, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });z?????

export default function Home() {
  const { typeStart, typeEnd, inputRock, ...params } = useTyping(
    "Welcome To Smile FE.\n What category do you browse?(Select and push Enter)"
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const doSomething = useCallback(() => {
    typeEnd();
    setShowOptions(true);
  }, []);
  return (
    <div
      className={` w-screen flex justify-end relative bg-pu rple-500 overflow-hidden h-screen`}
    >
      {/* <Header /> */}
      <main className="flex bg-theme w-10/12 h-4/5 relative header-height-padding justify-center">
        <CommandDisplay
          className="msg-box"
          speed={80}
          typeEnd={doSomething}
          {...params}
          showOptions={showOptions}
        />
      </main>
      <div className=" w-pickImage max-w-pickImage absolute bottom-6 left-12">
        <Image
          src="/pc.gif"
          width={900}
          height={220}
          alt="PCくん"
          layout="responsive"
        />
      </div>
    </div>
  );
}
