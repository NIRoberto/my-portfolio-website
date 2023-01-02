import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ data }) => (
  <>
    {data.map(({ id, image, date, description, title }, index) => {
      return (
        <div
          key={id}
          className="bg-whit border-2 border-mai   basis-full sm:basis-2/5 md:basis-1/3  rounded-md hover:shadow-lg flex flex-col shadow-md"
        >
          <div className="basis-2/3">
            <img
              className="h-80  object-cover"
              src={image}
              alt="atlp program image"
            />
          </div>
          <div className="p-4 basis-1/3 ">
            <div>
              <span style={{ fontSize: "10px" }}>{date.slice(0, 10)}</span>
            </div>
            <div className="pb-4">
              <Link href={`/blog/${id}`}>
                <h4 className="font-semibold text-xl my-4">{title.slice(0,40)}</h4>
                <p className="text-sm">{description.slice(0,60)}</p>
              </Link>
            </div>
          </div>
        </div>
      );
    })}
  </>
);

export default Blog;
