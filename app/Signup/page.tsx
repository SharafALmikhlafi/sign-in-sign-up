"use client";
import Textfield from "@/components/Textfield";
import MainButton from "@/components/MainButton";
import { ChangeEvent, useState, SubmitEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import validateSignup from "@/schemas/signup/page";
export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value});
  }
   const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
   e.preventDefault();
   try {
    validateSignup(user);
    const response = await fetch("http://localhost:5000/api/auth/register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    console.log(data);
  }   catch (error) {
    console.error(error);
  }
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
              <h2>Sign Up</h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <Textfield
                type="text"
                holder="Enter your name"
                name="name"
                value={user.name}
                onchange={handleChange}
              />
              <Textfield
                type="text"
                holder="Enter your username"
                name="username"
                value={user.username}
                onchange={handleChange}
              />
              <div className="mt-10 mb-10">
                <div className="mt-10 mb-10"></div>
              </div>
              <Textfield
                type="text"
                holder="Enter your Email"
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
              <div className="mt-10 mb-10">
                <MainButton text="Sign up" />
              </div>
            </form>
            <div className="mt-2">
              <Link href="/Login"> Login</Link>
            </div>
          </div>
        </div>
      </>
    );
  };

