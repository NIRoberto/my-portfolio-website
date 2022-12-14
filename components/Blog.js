import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ data }) => (
  <>
    {data.map(({id, image, date, description, title }) => {
      return (
        <div key={id} className="bg-white   basis-11/12 sm:basis-2/5 md:basis-1/3  rounded-md hover:shadow-lg flex flex-col shadow-md">
          <div className="basis-2/3">
            <img
              className="h-80  object-cover"
              src={image}
              alt="atlp program image"
            />
          </div>
          <div className="p-4 basis-1/3 ">
            <div >
              <span style={{ fontSize: "10px" }}>{date}</span>
            </div>
            <div className="pb-4">
              <Link href="/singleBlog">
                <h4 className="font-semibold text-xl my-4">{title}</h4>
                <p className="text-sm">{description}</p>
              </Link>
            </div>
          </div>
        </div>
      );
    })}
  </>
);

export default Blog;
