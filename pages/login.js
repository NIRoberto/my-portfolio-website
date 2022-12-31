import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { Re } from "../components/Re";

const login = () => {
  const { login, currentUser } = useAuth();
  console.log(currentUser);
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const router = useRouter();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitform = async ({ email, password }) => {
    try {
      await login(email, password);
    } catch (error) {
      setMessage("Incorrect email or password");
    }
  };
  // useEffect(() => {

  // }, []);
  return (
    <>
      {currentUser ? (
        <Re url="/dashboard"></Re>
      ) : (
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
            <Link
              className="bg-main rounded-md py-1  px-8  text-center text-white text-sm"
              href="/"
            >
              Back to Home
            </Link>
            <h1 className="text-2xl font-semibold my-8">Welcome back!</h1>
            <div className="flex-col flex">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                {...register("email")}
                className="border-2  outline-none border-main rounded-md p-2 my-4"
                placeholder="Enter email here..."
              />
              <span className="text-sm text-red-500">{message}</span>
            </div>
            <div className="flex-col flex">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter password here.."
                className="border-2 outline-none  border-main rounded-md p-2 my-4"
                name="password"
              />
              <span className="text-sm text-red-500">{message}</span>
            </div>
            <div className="mb-8">
              {/* <Link  href="/dashboard"> */}
              <button className="bg-main mt-2  p-2 outline-none border-none text-white text-center w-full rounded-md">
                Login
              </button>
              {/* </Link> */}
            </div>
            <div>
              <p className="text-sm">
                Create account
                <Link
                  className="text-main  font-semibold px-2"
                  href="/register"
                >
                  here
                </Link>
                if you don't have
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default login;
