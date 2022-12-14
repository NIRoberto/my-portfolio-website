import Link from "next/link";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";


import React from "react";


const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password:yup.string().min(4).max(12).required(),
  
}) 

const register = () => {

  const { register, handleSubmit,formState:{errors},reset } = useForm({
    resolver:yupResolver(schema)
  })
  const submitform = data => {
    console.log(data);
    reset();
  }

  return (
    <>
      <div
        className="h-screen flex justify-center items-center"
        style={{
          background: " rgb(233,118,53)",
          background:
            "linear-gradient(90deg, rgba(233,118,53,1) 57%, rgba(239,160,126,1) 80%)",
        }}
      >
        <form
          onSubmit={handleSubmit(submitform)}
          className="bg-white  p-8  mb-16 md:w-96 flex flex-col shadow-md rounded-sm"
        >
          <h1 className="text-2xl font-semibold my-8">Create an account</h1>
          <div className="flex-col flex">
            <label htmlFor="name">Full name</label>
            <input
              type="name"
              className="border-2  border-main rounded-md outline-none p-2 my-4"
              placeholder="Enter name here..."
              name="name"
              {...register("name")}
            />
            <span className="text-xs text-red-500">{errors.name?.message}</span>
          </div>
          <div className="flex-col flex">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-2  outline-none border-main rounded-md p-2 my-4"
              placeholder="Enter email here..."
              name="email"
              {...register("email")}
            />
            <span className="text-xs text-red-500">{errors.email?.message}</span>
          </div>
          <div className="flex-col flex">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password here.."
              className="border-2 outline-none  border-main rounded-md p-2 my-4"
              name="password"
              {...register("password")}

            />
            <span className="text-xs text-red-500">{ errors.password?.message}</span>
          </div>
          <div className="mb-8">
            <button className="bg-main mt-2  p-2 outline-none border-none text-white text-center w-full rounded-md">
              Register
            </button>
          </div>
          <div>
            <p className="text-sm">
              Login
              <Link className="text-main  font-semibold px-2" href="/login">
                here
              </Link>
              if you have account
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
