import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-400 p-16 w-full border-2 border-white text-white flex justify-between items-center">
      <div className="basis-3/6">
        <h1 className="text-2xl">Get in Touch</h1>
        <form action="#" className="p-  border-2  border-red-50">
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                className=" py-2  outline-none  border-none px-8 rounded-md"
              />
            </div>
            <div className="flex  outline-none  border-none flex-col">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="email"
                className=" py-2  outline-none  border-none px-8 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col  outline-none  border-none  rounded-md  py-2 px-8">
            <label htmlFor="message">Message</label>
            <textarea
              className="h-20 outline-none border-none  rounded-md"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div>
            <button className="rounded-md py-20  outline-none  border-none px-8">
              Send message
            </button>
          </div>
        </form>
      </div>
      <div className="basis-3/6">
        <div className="flex flex-col">
          <span>Phone</span>
          <span>+250787491277</span>
        </div>
        <div className="flex flex-col">
          <span>Email</span>
          <span>robertwilly668@gmail.com</span>
        </div>
        <div className="flex flex-col">
          <span>Address: </span>
          <span>Huye,Southern Rwanda</span>
        </div>
        <div className="flex">
          <span>
            <FaFacebookSquare />
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
