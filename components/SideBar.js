import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col p-8 h-screen">
        <ul className="flex  flex-col text-white gap-4">
          {/* <li className="hover:text-orange-300 duration-300 ease-in-out">
            <Link href="/dashboard">Dashboard</Link>
          </li> */}
          {/* <li className="hover:text-orange-300  duration-300 ease-in-out">
            <Link href="/user">Users</Link>
          </li> */}
          <li className="hover:text-orange-300  duration-300 ease-in-out">
            <Link href="/dashboard">Blogs</Link>
          </li>
          {/* <li className="hover:text-orange-300  duration-300 ease-in-out">
            <Link href="/project">Projects</Link>
          </li> */}
          <li className="hover:text-orange-300  duration-300 ease-in-out">
            <Link href="/query">Query </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
