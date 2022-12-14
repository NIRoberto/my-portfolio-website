// import React from 'react'

const BlogDash = ({ data }) => {
  console.log(data);
  const { id, title, date, description } = data;
  console.log(title);

  return (
    <>
      <td className="px-4 font-bold py-2">{id}</td>
      <td className="text-sm p-8">
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </td>
      <td className="text-sm">{description.slice(0, 50)}</td>
      <td className="text-xs p-4">{date}</td>
      <td className="flex gap-4 justify-center items-center p-4">
        <button className="bg-white p-2 text-main shadow-md rounded-md text-xs ">
          Edit
        </button>
        <button className="bg-red-800 p-2 shadow-md rounded-md text-white text-xs">
          Delete
        </button>
      </td>
    </>
  );
};

export default BlogDash;
