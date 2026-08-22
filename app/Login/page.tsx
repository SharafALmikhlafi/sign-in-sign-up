"use client";
import Textfield from "@/components/Textfield";
import MainButton from "@/components/MainButton";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState, SubmitEvent } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  }
  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen ">
        <Image src="/main.jpg" alt="" fill className="-z-10" />
        <div className=" p-5 w-80 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="" width={60} height={70} />
          </div>
          <div className="text-center text-3xl font-bold mt-10 mb-10">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <Textfield
              type="text"
              holder="Enter your email"
              name="email"
              value={user.email}
              onchange={handleChange}
            />
            <Textfield
              type="password"
              holder="Enter your password"
              name="password"
              value={user.password}
              onchange={handleChange}
            />
            <MainButton text="Log in" />
          </form>
          <div className="mt-10 mb-10"></div>
           <div className="mt-2">
             <Link href="/Signup"> Sign up</Link>
           </div>
        </div>
      </div>
    </>
  );
}
