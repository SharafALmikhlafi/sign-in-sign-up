'use client';
import Textfield from "@/components/Textfield";
import MainButton from "@/components/MainButton";
import Image from "next/image";
export default function Signup() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <Image src="/main.jpg" alt="" fill className="-z-10" />
        <div className=" p-5 w-80 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="" width={60} height={70} />
          </div>
          <div className="text-center text-3xl font-bold mt-10 mb-10">
            <h2>Sign Up</h2>
          </div>
          <form action="">
            <Textfield kind="text" holder="Enter your name" name="name" value="" onchange={() => {}} />
            <Textfield kind="text" holder="Enter your username" name="username" value="" onchange={() => {}} />
            <div className="mt-10 mb-10">
              <div className="mt-10 mb-10"></div>
            </div>
            <Textfield kind="text" holder="Enter your Email" name="email" value="" onchange={() => {}} />
            <Textfield kind="password" holder="Enter your password" name="password" value="" onchange={() => {}}  />
            <div className="mt-10 mb-10">
              <MainButton text="Sign up" />
            </div>
          </form>
          <div className="mt-2">
            <p>Log in</p>
          </div>
        </div>
      </div>
    </>
  );
}
