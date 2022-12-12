import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { RxCross1 } from "react-icons/rx";

const singleBlog = () => {
  const [nav, setNav] = useState(true);

  return (
    <div>
      <header
        style={{
          background: "",

          // background:
          //   "linear-gradient(90deg, rgba(233,118,53,1) 57%, rgba(239,160,126,1) 80%)",
        }}
        className="flex bg-gradient bg-main  relative text-white justify-between p-7"
      >
        <div className="hidden  md:block">
          <ul className="flex  ">
            <li className="ml-8 ">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-8 ">
              <a href="#other">Other blog</a>
            </li>
            <li className="ml-8 ">
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
              <Link href="/index">Home</Link>
            </li>

            <li className="m-8">
              <a href="#blog">Other posts</a>
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
            className="bg-white text-main px-8 py-2 hover:bg-orange-100 hover:text-main outline-none border-none  rounded-md"
          >
            Login
          </Link>
        </div>
      </header>
      <div
        style={{
          background: " ",
          // background:
          //   "linear-gradient(90deg, rgba(233,118,53,1) 57%, rgba(239,160,126,1) 80%)",
        }}
        className="bg-main  h-96  md:py-16  flex flex-col  md:flex-row items-center"
      ></div>
      <div className="flex   justify-center ">
        <div className="bg-white  w-4/5 -m-60 px-8 md:px-20 py-10 mb-16 shadow-md rounded-md">
          <div>
            <div className="text-2xl font-semibold my-4">
              {" "}
              How to learn programming faster.
            </div>
            <div className="text-xs my-8">4 dec 2020</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui:
              </p>
              <img
                src="https://res.cloudinary.com/nrob/image/upload/v1670505804/faster_yug2dz.png"
                alt="How to learn coding faster"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <h1 className="ml-8 md:ml-32 pl-1 text-2xl text-main">Other post</h1>
        <div className="grid m-auto gap-8  grid-cols-1 md:grid-cols-2 w-4/5">
          <div>
            <h3 className="font-semibold my-4">My jouney through the ATLP</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis aliquid! Cum vel cupiditate maxime nostrum quia
              eaque tempore a?
            </p>
          </div>
          <div>
            <h3 className="font-semibold my-4">My jouney through the ATLP</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis aliquid! Cum vel cupiditate maxime nostrum quia
              eaque tempore a?
            </p>
          </div>{" "}
          <div>
            <h3 className="font-semibold my-4">My jouney through the ATLP</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis aliquid! Cum vel cupiditate maxime nostrum quia
              eaque tempore a?
            </p>
          </div>{" "}
          <div>
            <h3 className="font-semibold my-4">My jouney through the ATLP</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quis aliquid! Cum vel cupiditate maxime nostrum quia
              eaque tempore a?
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default singleBlog;
