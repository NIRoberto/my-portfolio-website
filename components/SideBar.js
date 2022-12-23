import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col p-8">
        <ul className="flex  flex-col  gap-4">
          <li className="hover:text-main duration-300 ease-in-out">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-main duration-300 ease-in-out">
            <Link href="/user">Users</Link>
          </li>
          <li className="hover:text-main duration-300 ease-in-out">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-main duration-300 ease-in-out">
            <Link href="/project">Projects</Link>
          </li>
          <li className="hover:text-main duration-300 ease-in-out">
            <Link href="/query">Query </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
