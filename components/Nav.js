import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


const Nav = () => {
  const [nav, setNav] = useState(true);

  return (
    <header
      style={{
        background: " rgb(233,118,53)",

        // background:
        //   "linear-gradient(90deg, rgba(233,118,53,1) 57%, rgba(239,160,126,1) 80%)",
      }}
      className="flex bg-gradient bg-main relative text-white justify-between p-7"
    >
      <div className="hidden  md:block">
        <ul className="flex">
          <li className="ml-8">
            <Link href="/index">Home</Link>
          </li>
          <li className="ml-8">
            <a href="#about">About</a>
          </li>
          <li className="ml-8">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="ml-8">
            <a href="#blog">Blog</a>
          </li>
          <li className="ml-8">
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </div>
      <div
        className={` ${
          nav ? "hidden" : "block"
        } absolute ease-in-out anim bottom-0 top-0 right-0 `}
      >
        <ul className="flex flex-col p-8 shadow-2xl w-60 bg-white text-main ">
          <li className="m-8">
            <Link href="/">Home</Link>
          </li>
          <li className="m-8">
            <a href="#about">About</a>
          </li>
          <li className="m-8">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="m-8">
            <a href="#blog">Blog</a>
          </li>
          <li className="m-8">
            <a href="#contact">Contact </a>
          </li>
        </ul>
      </div>
      <div className="flex p-1 md:hidden">
        {nav ? (
          <div onClick={() => setNav(!nav)}>
            <FiMenu className="text-3xl" />
          </div>
        ) : (
          <div>
            <RxCross1 onClick={() => setNav(!nav)} className="text-3xl" />
          </div>
        )}
      </div>

      <div>
        <Link
          href="/login"
          className="bg-white px-8 py-2 hover:bg-orange-100 hover:text-main text-main outline-none border-none  rounded-md"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Nav;
