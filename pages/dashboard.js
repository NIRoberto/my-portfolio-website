import React from "react";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

 const dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="basis-2/12">
          <SideBar />
        </div>
        <div className="basis-10/12">
          <Content />
        </div>
      </div>
    </div>
  );
};
export default dashboard