// import React from 'react'

import { useState } from "react";
import BlogDash from "./BlogDash";
import blog from "./data/blog";

const Content = () => {
  const [tab, setTab] = useState(true);
  return (
    <div className="bg-orange-50 flex flex-col items-center p-16 min-h-screen">
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
              {blog.map((e, i) => (
                <tr className="">
                  <BlogDash key={e.id} id={i} data={e} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <form className="flex p-8 bg-white rounded-md w-96 mt-8 flex-col gap-8">
            <div className="flex flex-col gap-4">
              <label htmlFor="">Choose Image</label>
              <input type="file" name="image" id="file" />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="p-2 rounded-md outline-none border-2  w-full"
                name="title"
                id="title"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="">Date</label>
              <input
                type="date"
                className="p-2 rounded-md w-full border-2 outline-none"
                name="date"
                id="date"
              />
            </div>
            <div className="flex  flex-col gap-4">
              <label htmlFor=""></label>
              <textarea
                name="body"
                id=""
                className="w-full p-2 h-24 rounded-md border-2 outline-none"
             
              ></textarea>
            </div>
            <div className="w-full">
              <button className="text-center w-full p-2 rounded-md  text-white bg-main">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Content;
