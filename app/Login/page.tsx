import Image from "next/image"
export default function Login(){
    return(
        <>
        <div className="flex justify-center items-center min-h-screen ">
            <Image src = "/main.jpg" alt="" fill className="-z-10"/>
                <div className=" p-5 w-80 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
                    <div className="flex justify-center">
                        <Image src="/logo.png" alt="" width={60} height={70} />
                    </div>
                    <div className="text-center text-3xl font-bold mt-10 mb-10">
                        <h2>Login</h2>
                    </div>
                    <div className="text-sm font-medium">
                        <div className="">
                            <input type="text" placeholder="username" className="border-b-2 w-full h-8"/>
                        </div>
                        <div className="mt-10 mb-10">
                            <input type="password" placeholder="password" className="border-b-2 w-full h-8" />
                        </div>
                    </div>
                    <div className="w-full h-10 bg-[#1d2931] text-white rounded-sm">
                          <button className="w-full h-10">Login</button>
                    </div>
                    <div className="mt-2">
                        <p>sign up</p>
                    </div>
            </div>
         </div>
        </>
    )
}