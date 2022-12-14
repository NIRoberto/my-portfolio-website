import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        background: " rgb(233,118,53)",
        background:
          "linear-gradient(90deg, rgba(233,118,53,1) 57%, rgba(239,160,126,1) 80%)",
      }}
    >
      <form
        action="#"
        className="bg-white  p-8  mb-16 md:w-96 flex flex-col shadow-md rounded-sm"
      >

        <Link className="bg-main rounded-md py-1  px-8  text-center text-white text-sm" href="/">Back to Home</Link>
        <h1 className="text-2xl font-semibold my-8">Welcome back!</h1>
        <div className="flex-col flex">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border-2  outline-none border-main rounded-md p-2 my-4"
            placeholder="Enter email here..."
          />
        </div>
        <div className="flex-col flex">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password here.."
            className="border-2 outline-none  border-main rounded-md p-2 my-4"
            name="password"
          />
        </div>
        <div className="mb-8">
          {/* <Link  href="/dashboard"> */}
          <button className="bg-main mt-2  p-2 outline-none border-none text-white text-center w-full rounded-md">
            Login
          </button>
          {/* </Link> */}
        </div>
        <div>
          <p className="text-sm">
            Create account
            <Link className="text-main  font-semibold px-2" href="/register">
              here
            </Link>
            if you don't have
          </p>
        </div>
      </form>
    </div>
  );
};

export default login;
