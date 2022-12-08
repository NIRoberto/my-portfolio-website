import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-main p-16 w-full text-white flex  justify-between items-center">
        <div className="basis-3/6   border-r-4  border-white rounded-md  px-8">
          <h1 className="text-4xl font-semibold py-2  px-4">Get in Touch</h1>
          <form action="#" className=" p-4">
            {/* <div className="flex px-4 justify-around w-full"> */}
            <div className="flex flex-col">
              <label className="py-2" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className=" py-2  outline-none  border-none px-8 rounded-md"
              />
            </div>
            <div className="flex   outline-none  border-none flex-col">
              <label className="py-2" htmlFor="Email">
                Email
              </label>
              <input
                type="text"
                name="email"
                className=" py-2 text-gray-500 outline-none  border-none px-8 rounded-md"
              />
            </div>
            {/* </div> */}
            <div className="flex flex-col  outline-none   border-none  rounded-md  py-2">
              <label className="py-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="h-32 p-2 text-black outline-none border-none  rounded-md"
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className="">
              <button className="rounded-md mt-4 w-full py-2 bg-white text-center text-orange-400 outline-none  border-none px-8">
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className="basis-3/6 px-10 ">
          <div className="flex flex-col">
            <span className="font-semibold py-2 text-md">Phone</span>
            <span>+250787491277</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold py-2 text-md">Email</span>
            <span>robertwilly668@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold py-2 text-md">Address: </span>
            <span>Huye,Southern Rwanda</span>
          </div>
          <div className="flex my-4  ">
            <span>
              <FaFacebookSquare className="text-2xl cursor-pointer  mr-4" />
            </span>
            <span>
              <FaGithubSquare className="text-2xl cursor-pointer mr-4" />
            </span>
            <span>
              <FaLinkedin className="text-2xl  cursor-pointer  mr-4" />
            </span>
          </div>
        </div>
      </footer>
      <div className="text-center bg-main p-4 text-white">
        <p>Copyright © 2022 All rights reserved | by Robert Niyitanga</p>
      </div>
    </>
  );
};

export default Footer;
