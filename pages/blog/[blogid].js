import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import useFetchBlog from "../../components/data/fetchBlogs";
import Footer from "../../components/Footer";

const singleBlog = () => {
  const [nav, setNav] = useState(true);
  //   const [single ,setSingle]  =  useState(null);
  const router = useRouter();
  let blogid = router.query.blogid;

  const { blogs } = useFetchBlog();

  const data = blogs.find((e) => e.id == blogid);
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
      {data ? (
        <div className="flex   justify-center ">
          <div className="bg-white  w-4/5 -m-60 px-8 md:px-20 py-10 mb-16 shadow-md rounded-md">
            <div>
              <div className="text-2xl font-semibold my-4">
                {data ? data.title : ""}
              </div>
              <div className="text-xs my-8">4 dec 2020</div>

              <img
                src={data ? data.image : ""}
                alt="How to learn coding faster"
              />
              <div>{data ? data.description : ""}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}

      <div className="my-16">
        <h1 className="ml-8 md:ml-32 pl-1 text-2xl text-main">Other post</h1>
        <div className="grid m-auto gap-8  grid-cols-1 md:grid-cols-2 w-4/5">
          {blogs.map((e) => (
            <div key={e.id} className="flex items-center justify-center">
              <div className="w-full object-cover p-4 basis-1/5">
                <img className="rounded-md" src={e.image} alt="blog image" srcset="" />
              </div>
              <div className="basis-4/5">
                <h3 className="font-semibold my-2">{e.title.slice(0, 40)}</h3>
                <p className="text-sm">{e.description.slice(0, 60)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default singleBlog;
