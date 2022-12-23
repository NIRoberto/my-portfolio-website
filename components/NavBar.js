import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className="flex bg bg-white  shadow-md p-6 justify-between">
      <div>
        {" "}
        <h1 className="text-main text-4xl font-bold">Admin</h1>
      </div>
      <div>
        <FaRegUserCircle
          className="relative text-3xl"
          onClick={() => setDrop(!drop)}
        />

        <div
          className={`${
            drop ? "flex" : "hidden"
          } bg-white   absolute  flex-col shadow-md  p-2  items-center w-32 right-0`}
        >
          <ul className="flex- flex-col gap-4">
            <li className="hover:bg-slate-100  w-32">
              <a href="">Profile</a>
            </li>
            <li className="hover:bg-slate-100  w-32">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
