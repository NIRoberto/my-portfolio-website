import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const [nav, setNav] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const { currentUser } = useAuth();
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={`flex fixed p-7 z-10 bg-gradient ${
        navbar ? "bg-white shadow-md text-man" : "bg-main text-white"
      }   justify-between left-0 right-0 top-0`}
    >
      <div className="hidden  md:block">
        <ul className="flex">
          <li className="ml-8">
            <Link href="/">Home</Link>
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
        <ul className="flex flex-col p-8 shadow-2xl w-60 bg-main  border border-white text-white ">
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

      {currentUser ? (
        <></>
      ) : (
        <div>
          <Link
            href="/login"
            className={`${
              !navbar ? "bg-white text-main shadow-md text-man" : "bg-main text-white"
            } px-8 py-2 hover:bg-orange-100 hover:text-main  outline-none border-none  rounded-md`}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
