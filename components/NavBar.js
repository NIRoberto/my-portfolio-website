import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [drop, setDrop] = useState(false);
  const router = useRouter();

  const { logout} = useAuth();

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
            <li
              className="hover:bg-slate-100  w-32"
              onClick={() => {
                logout();
                setTimeout(() => {
                  router.push("/login");
                }, 6000);
              }}
            >
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
