import React from "react";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import QeuryDash from "../components/QeuryDash";
import SideBar from "../components/SideBar";

const query = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="basis-2/12 bg-main">
          <SideBar />
        </div>
        <div className="basis-10/12 flex items-center  border border-red-00">
          <QeuryDash />
        </div>
      </div>
    </div>
  );
};
export default query;
