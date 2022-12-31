
import  {useState}  from "react";

import Link from "next/link";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
const schema = yup.object().shape({
  // name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});
const register = () => {
  const router = useRouter();

  const [message, setMessage] = useState  ("");

  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitform = async ({email,password}) => {
    if (email && password) {
      try {
        await  signup(email,password);
        router.push("/login");
      } catch (error) {
          console.log(error.message);
          let str =error.message.replaceAll("-"," ");
          setMessage(str.replace().slice(22,str.length - 2));
          console.log(message);
      }
    }
  };
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
          className="bg-white   p-8  my-16 md:w-96 flex flex-col shadow-md rounded-sm"
        >
          {" "}
          <Link
            className="bg-main rounded-md py-1  px-8  text-center text-white text-sm"
            href="/"
          >
            Back to Home
          </Link>
          <h1 className="text-2xl font-semibold my-8">Create an account</h1>
          {/* <div className="flex-col flex">
            <label htmlFor="name">Full name</label>
            <input
              type="name"
              className="border-2  border-main rounded-md outline-none p-2 my-4"
              placeholder="Enter name here..."
              name="name"
              {...register("name")}
            />
            <span className="text-sm text-red-500">{errors.name?.message}</span>
          </div> */}
          <div className="flex-col flex">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border-2  outline-none border-main rounded-md p-2 my-4"
              placeholder="Enter email here..."
              name="email"
              {...register("email")}
            />
            <span className="text-sm text-red-500">
              {errors.email?.message}
              {message}
            </span>
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
            <span className="text-sm text-red-500">
              {errors.password?.message}
            </span>
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
