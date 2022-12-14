import React from "react";
import { FaFigma, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";

const Skill = ({ skills }) => {
  return (
    <>
      {skills.map(({ id,stack, year, projects, icon }) => {
        return (
          <div  key={id} className="flex w-3/5 bg-white shadow-lg justify-between px-8 py-4   ">
            <div className="flex flex-col mr-4 justify-center">
              <span className="font-semibold text-sm">{stack}</span>
              <span className="text-" style={{ fontSize: "10px" }}>
                {year} year, {projects} projects
              </span>
            </div>
            <div>
              {/* <span className="text-center">{icon}</span> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Skill;
