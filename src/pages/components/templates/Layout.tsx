import React from "react";
import Header from "../organisms/Header";
import Navigation from "../organisms/Navigation";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-theme w-screen h-screen">
      {/* <Header /> */}
      <main className="bg-theme relative flex">
        <Navigation />
        <section className="w-full navigation-padding">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
