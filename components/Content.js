// import React from 'react'

import { useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import BlogDash from "./BlogDash";
import blog from "./data/blog";
import { useAuth } from "../context/AuthContext";
import useFetchBlog from "./data/fetchBlogs";

const schema = yup.object().shape({
  image: yup.mixed().test("required", "Choose an Image for blog", (value) => {
    return value && value.length;
  }),
  title: yup.string().required(),
  // date: yup.string().required(),
  body: yup.string().min(10).max(10000).required(),
});

// const  loggedUser  =
const Content = () => {
  const { currentUser } = useAuth();
  const [tab, setTab] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [files, setFile] = useState("");

  const { blogs } = useFetchBlog();
  const submitform = async ({ image, title, date, body }) => {
    try {
      let id = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      const date = new Date().toDateString();
      const formData = new FormData();
      formData.append("file", image[0]);
      formData.append("upload_preset", "umunyarwanda");
      let img = await fetch(
        "https://api.cloudinary.com/v1_1/nrob/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      let url = await img.json();
      await addDoc(collection(db, "blogs"), {
        id: id,
        image: url.url,
        title: title,
        date: `${date}`,
        description: body,
      });
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <div className="bg-orange-50 flex flex-col   w-full p-16 min-h-screen">
      <div className="text-white flex gap-4">
        <button
          onClick={() => setTab(false)}
          className="bg-white text-main px-8 shadow-md rounded-md py-2"
        >
          All post
        </button>
        <button
          onClick={() => setTab(true)}
          className="bg-main px-8 shadow-md rounded-md py-2"
        >
          Add post
        </button>
      </div>
      {!tab ? (
        <div>
          <table className="bg-white m-8  border-collapse ">
            <thead className="bg-main text-white">
              <tr className="border ">
                <th className="px-4 py-2">N</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((e, i) => (
                <tr className="">
                  <BlogDash key={e.id} i={i} data={e} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <form
            onSubmit={handleSubmit(submitform)}
            className="flex p-8 bg-white shadow-md rounded-md w- mt-8 flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="">Choose Image</label>
              <input
                type="file"
                name="image"
                {...register("image")}
                id="file"
              />
              {/* <img src={files} alt="fdgthj" /> */}
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="p-2 rounded-md outline-none border-2  w-full"
                name="title"
                {...register("title")}
                id="title"
              />
            </div>
            <div className="flex  flex-col gap-4">
              <label htmlFor=""></label>
              <textarea
                name="body"
                id=""
                {...register("body")}
                className="w-full p-2 h-32 rounded-md border-2 outline-none"
              ></textarea>
            </div>
            <div className="w-full">
              <button className="text-center w-full p-2 rounded-md  text-white bg-main">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Content;
