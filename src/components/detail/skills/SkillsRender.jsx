import React from "react";
import { SectionTitle } from "../Common";
import CreateSkillsList from "./CreateSkillsList";
import CreateSkillsSummary from "./CreateSkillsSummary";

const SkillsRender = () => {
  let titleBarBgc = "#0077ff";
  return (
    <div className="skills__wrap">
      <section className="tools-wrap sec">
        <SectionTitle title={"Tools"} bgc={titleBarBgc} />
        <CreateSkillsList use={"tools"} />
      </section>
      <div className="flex-col">
        <section className="frontend-wrap sec">
          <SectionTitle title={"Frontend"} bgc={titleBarBgc} />
          <CreateSkillsList use={"front"} />
        </section>

        <section className="backend-wrap sec">
          <SectionTitle title={"Backend"} bgc={titleBarBgc} />
          <CreateSkillsList use={"back"} />
        </section>
       
        <section className="summary-wrap sec">
          <SectionTitle title={"Summary"} bgc={titleBarBgc} />
          <CreateSkillsSummary />
        </section>
        </div>
    </div>
  );
};

export default SkillsRender;
