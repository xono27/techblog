import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 navigation-width h-screen">
      <div className="flex items-center header-height border-b border-collapse border-white justify-between">
        <h1 className="text-white ml-12 text-4xl typing-text">Smile FE</h1>
      </div>
      <ul>
        <li className="">HTML</li>
        <li className="">CSS</li>
        <li className="">JavaScript/Node.js</li>
        <li className="">TypeScript</li>
        <li className="">Styling Library</li>
        <li className="">Other FE Library</li>
      </ul>
    </nav>
  );
};

export default Navigation;
