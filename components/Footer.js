import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import * as yup from "yup";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).max(10000).required(),
});
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(errors);
  const submitform = async ({ name, email, message }) => {
    try {
      let id = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      await addDoc(collection(db, "queries"), {
        id: id,
        name: name,
        email: email,
        date: `${day} / ${month} / ${year}`,
        message: message,
      });

      reset();
      alert("Message send successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <footer
        id="contact"
        // style={{
        //   background: " rgb(2,0,36)",
        //   background:
        //     "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,216,155,1) 0%, rgba(25,84,123,1) 100%)",
        // }}
        className="bg-main p-8 md:p-16 w-full text-white flex  flex-col md:flex-row  justify-between items-center"
      >
        <div className=" basis-11/12 md:basis-3/6  border- w-full  md:border-r-4  border-white rounded-md  px-2 md:px-8">
          <h1 className="text-4xl font-semibold py-2  px-4">Get in Touch</h1>
          <form onSubmit={handleSubmit(submitform)} className=" text-black p-4">
            {/* <div className="flex px-4 justify-around w-full"> */}
            <div className="flex flex-col">
              <label className="py-2 text-white" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className={`${
                  errors.name ? "border-2 border-red-500" : "border-none"
                } py-2  outline-none   px-2 rounded-md`}
                {...register("name")}
              />
              <span className="text-red-500 ">{errors.name?.message}</span>
            </div>
            <div className="flex   outline-none  border-none flex-col">
              <label className="py-2 text-white" htmlFor="Email">
                Email
              </label>
              <input
                type="text"
                name="email"
                className={`${
                  errors.email ? "border-2 border-red-500" : "border-none"
                } py-2  outline-none   px-2 rounded-md`}
                {...register("email")}
              />
              <span className="text-red-500  ">{errors.email?.message}</span>
            </div>
            {/* </div> */}
            <div className="flex flex-col  outline-none   border-none  rounded-md  py-2">
              <label className="py-2 text-white" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className={`${
                  errors.message ? "border-2 border-red-500" : "border-none"
                } py-2  outline-none   h-28 px-2 rounded-md`}
                {...register("message")}
              ></textarea>
              <span className="text-red-500  ">{errors.message?.message}</span>
            </div>
            <div className="">
              <button className="rounded-md mt-4 w-full py-2 bg-white text-center text-main outline-none  border-none px-8">
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className="basis-full w-full md:basis-3/6 px-8 md:px-10 ">
          <div className="flex justify-between items-center md:items-start md:flex-col">
            <span className="font-semibold py-2 text-md">Phone:</span>
            <span className="">+250787491277</span>
          </div>
          <div className="flex justify-between items-center  md:items-start md:flex-col">
            <span className="font-semibold py-2 text-md">Email:</span>
            <span>robertwilly668@gmail.com</span>
          </div>
          <div className="flex justify-between items-center md:items-start md:flex-col">
            <span className="font-semibold py-2 text-md">Address:</span>
            <span>Huye,Southern Rwanda</span>
          </div>
          <div className="flex my-4  ">
            <a
              className="cursor-pointer text-white no-underline"
              target="_blank"
              href="https://www.facebook.com/roberto.will.906/"
            >
              <span>
                <FaFacebookSquare className="text-2xl cursor-pointer  mr-4" />
              </span>
            </a>
            <a
              className="cursor-pointer text-white no-underline"
              target="_blank"
              href="https://github.com/niRoberto"
            >
              <span>
                <FaGithubSquare className="text-2xl cursor-pointer mr-4" />
              </span>
            </a>
            <a
              className="cursor-pointer text-white no-underline"
              target="_blank"
              href="https://www.linkedin.com/in/robert-niyitanga-83008a1b9/"
            >
              <span>
                <FaLinkedin className="text-2xl  cursor-pointer  mr-4" />
              </span>
            </a>
          </div>
        </div>
      </footer>
      <div
        // style={{
        //   background: " rgb(2,0,36)",
        //   background:
        //     "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,216,155,1) 0%, rgba(25,84,123,1) 100%)",
        // }}
        className="text-center bg-main  text-xs md:text-md  p-4 text-white"
      >
        <p>Copyright © 2022 All rights reserved | by Robert Niyitanga</p>
      </div>
    </>
  );
};

export default Footer;
