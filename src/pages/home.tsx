import React from "react";
import Layout from "./components/templates/Layout";

const home: React.FC = () => {
  return (
    <Layout>
      <div className="flex items-center header-height border-b border-collapse border-white justify-between"></div>
      <div className="w-full h-screen bg-green-400 mt-20 mb-20"></div>
      <div className="w-full h-screen bg-green-400 mb-20"></div>
    </Layout>
  );
};

export default home;
