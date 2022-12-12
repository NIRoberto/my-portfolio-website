import React from "react";
import Image from "next/image";

const Project = (data) => {
  // const { image, title, description, stack, link } = data.data;
  return (
    <>
      {data.data.map(({ image, title, description, stack, link }) => {
        return (
          <div className="flex  flex-col lg:flex-row bg-white h-full gap-8 rounded-md shadow-md  mx-8 md:mx-20">
            <div className="basis-2/5 ">
              <img
                className="h-full object-cover"
                src={image}
                alt="dashboard  screen shot"
              />
            </div>
            <div className="basis-3/5 px-6 py-8">
              <div>
                <h2 className=" text-lg md:text-2xl  font-semibold">{title}</h2>
                <p className="py-4">{description}</p>
              </div>
              <div>
                <h4 className="font-semibold">Used stack</h4>
                <div className=" sm:flex my-8">
                  {stack.map((e) => (
                    <button className="bg-white m-2 basis-1/6 md:basis-1/5 my-2 shadow-md py-2 px-4 md:px-8  text-sm md:text-md rounded-md text-center">
                      {e}
                    </button>
                  ))}
                </div>
                <div className="text-right  text-blue-600 m-0">
                  <a href="#">lorem.com</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project;
