import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-400 p-16 w-full text-white flex justify-between items-center">
      <div className="basis-3/6">
        <h1 className="text-4xl font-semibold py-2  px-10">Get in Touch</h1>
        <form action="#" className=" p-4">
          <div className="flex px-4 justify-around w-full">
            <div className="flex flex-col">
              <label className="py-2" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className=" py-2 w-full outline-none  border-none px-8 rounded-md"
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
          </div>
          <div className="flex flex-col  outline-none   border-none  rounded-md  py-2 px-8">
            <label className="py-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="h-32 p-2 text-black outline-none border-none  rounded-md"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className="px-8">
            <button className="rounded-md mt-4 w-full py-2 bg-white text-center text-orange-400 outline-none  border-none px-8">
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="basis-3/6">
        <div className="flex flex-col">
          <span className="font-semibold py-2 text-2xl">Phone</span>
          <span>+250787491277</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold py-2 text-2xl">Email</span>
          <span>robertwilly668@gmail.com</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold py-2 text-2xl">Address: </span>
          <span>Huye,Southern Rwanda</span>
        </div>
        <div className="flex ">
          <span>
            <FaFacebookSquare className="" />
          </span>
          <span>
            <FaGithubSquare />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
