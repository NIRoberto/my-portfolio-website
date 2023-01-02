import React from "react";
import useFetchBlog from "./data/fetchBlogs";
import QueryData from "./QueryData";

const QeuryDash = () => {
  const { queryData } = useFetchBlog();
  console.log(queryData);
  return (
    <div>
      <h1 className="text-main m-8  text-3xl font-semibold">
        List all query from the contact form
      </h1>
      <table className="bg-white m-8  border-collapse ">
        <thead className="bg-main text-white">
          <tr className="border ">
            <th className="px-4 py-2">N</th>
            <th> Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {queryData.map((e, i) => (
            <tr className="">
              <QueryData key={e.i} id={i} data={e} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QeuryDash;
