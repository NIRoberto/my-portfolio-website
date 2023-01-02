// import React from 'react'

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const BlogDash = ({ data, i }) => {
  console.log(data);
  const { title, date, description, id } = data;
  console.log(title);

  const handleDeletingBlog = async (i) => {
    if (confirm("Are you sure you want to delete this query?") == true) {
      await deleteDoc(doc(db, "blogs", i));
    } else {
    }
  };

  return (
    <>
      <td className="px-4 font-bold py-2">{i}</td>
      <td className="text-sm p-8">
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </td>
      <td className="text-sm">{description.slice(0, 50)}</td>
      <td className="text-xs p-4">{date}</td>
      <td className="flex gap-4 justify-center items-center p-4">
        <button className="bg-white p-2 text-main shadow-md rounded-md text-xs ">
          Edit
        </button>
        <button
          className="bg-red-800 p-2 shadow-md rounded-md text-white text-xs"
          onClick={() => handleDeletingBlog(id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default BlogDash;
