import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

const QueryData = ({ data, i }) => {
  const { name, email, message, date, id } = data;
  const handleDeletingQuery = async (i) => {
    console.log(i);
    if (confirm("Are you sure you want to delete this query?") == true) {
      await deleteDoc(doc(db, "queries", i));
    } else {
    }
  };
  return (
    <>
      <td className="px-4 font-bold py-2">{i}</td>
      <td className="text-sm p-8">{name}</td>
      <td className="text-sm">{email}</td>

      <td className="text-sm p-4">{message.slice(0, 60)}</td>

      <td className="text-xs p-4">{date}</td>
      <td className="flex gap-4 justify-center items-center p-4">
        {/* <button className="bg-white p-2 text-main shadow-md rounded-md text-xs ">
          Edit
        </button> */}
        <button
          className="bg-red-800 p-2 shadow-md rounded-md text-white text-xs"
          onClick={() => handleDeletingQuery(id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default QueryData;
