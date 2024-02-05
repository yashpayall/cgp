import Header from "@/components/common/Header";
import BuildWeb from "@/components/docs/BuildWeb";
import DocsHero from "@/components/docs/DocsHero";
import MostPopular from "@/components/docs/MostPopular";
import React from "react";

const Docs = () => {
  return (
    <div>
      <Header />
      <DocsHero />
      <MostPopular />
      <BuildWeb />
    </div>
  );
};

export default Docs;
