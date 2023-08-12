import React from "react";
import Layout from "./components/templates/Layout";
import SkillsPageTop from "./components/skills/SkillsPageTop";
import HTMLCSS from "./components/skills/HTMLCSS";
import REACT from "./components/skills/React";
import PHP from "./components/skills/PHP";
import TypeScript from "./components/skills/TypeScript";
import Svelte from "./components/skills/Svelte";
import Vue from "./components/skills/Vue";
import Java from "./components/skills/Java";
import Node from "./components/skills/Node";
// import Layout from "../components/shared/Layout"
// import SkillsPageTop from "../components/skills/SkillsPageTop"
// import HTMLCSS from "../components/skills/HTMLCSS"
// import PHP from "../components/skills/PHP"
// import REACT from "../components/skills/React"
// import Java from "../components/skills/Java"
// import TypeScript from "../components/skills/TypeScript"
// import Node from "../components/skills/Node"
// import Svelte from "../components/skills/Svelte";
// import Vue from "../components/skills/Vue";

const Skills: React.FC = () => {
  return (
    <>
      <SkillsPageTop />
      <HTMLCSS />
      <REACT />
      <PHP />
      <TypeScript />
      <Svelte />
      <Node />
      <Vue />
      <Java />
    </>
    // <Layout>
    //   <SkillsPageTop />
    //   <HTMLCSS />
    //   <REACT />
    //   <PHP />
    //   <TypeScript />
    //   <Svelte />
    //   <Node />
    //   <Vue />
    //   <Java />
    // </Layout>
  );
};

export default Skills;
