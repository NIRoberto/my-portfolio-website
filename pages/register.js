import Link from "next/link";
import React from "react";

const register = () => {
  return (
    <>
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
          className="bg-white  p-8  mb-16 md:w-80 flex flex-col shadow-md rounded-sm"
        >
          <h1 className="text-2xl font-semibold my-8">Create an account</h1>
          <div className="flex-col flex">
            <label htmlFor="email">Full name</label>
            <input
              type="name"
              className="border-2  border-main rounded-sm p-1 my-4"
              placeholder="Enter email here..."
              name="name"
            />
          </div>
          <div className="flex-col flex">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-2  border-main rounded-sm p-1 my-4"
              placeholder="Enter email here..."
              name="email"
            />
          </div>
          <div className="flex-col flex">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password here.."
              className="border-2  border-main rounded-sm p-1 my-4"
              name="password"
            />
          </div>
          <div className="mb-8">
            <button className="bg-main mt-2  p-1 outline-none border-none text-white text-center w-full rounded-sm">
              Register
            </button>
          </div>
          <div>
            <p className="text-sm">
              Create account
              <Link
                className="text-blue-900  font-semibold px-2"
                href="/register"
              >
                here
              </Link>
              if you don't have
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
