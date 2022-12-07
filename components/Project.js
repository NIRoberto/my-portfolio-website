import React from "react";
import Image from "next/image";
import dashboard from "../public/dashboard.PNG";

const Project = () => {
  return (
    <div className="flex bg-white h-full rounded-md shadow-md  mx-20">
      <div className="basis-2/5 ">
        <Image
          className="h-full object-cover"
          src={dashboard}
          alt="dashboard  screen shot"
        ></Image>
      </div>
      <div className="basis-3/5 px-6 py-8">
        <div>
          <h2 className="text-2xl  font-semibold">Webiste admin dashboard</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eligendi distinctio aliquid odio nostrum architecto sed sequi iusto,
            hic iure quia, vitae animi tempore eius pariatur doloribus, debitis
            et quasi.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Used stack</h4>
          <div className="flex my-8">
            <button className="bg-white  shadow-md py-2 px-8  rounded-md text-center">
              React
            </button>
            <button className="bg-white  shadow-md py-2 px-8 ml-4 rounded-md text-center">
              Redux
            </button>
            <button className="bg-white  shadow-md py-2 px-8 ml-4 rounded-md text-center">
              Nodejs
            </button>
            <button className="bg-white  shadow-md py-2 px-8 ml-4 rounded-md text-center">
              Tailwindcss
            </button>
          </div>
          <div className="text-right  text-blue-600 m-0">
            <a href="#">lorem.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
