"use client";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/buyer";
    console.log("Form submitted");
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-[#0f0f10] p-11">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/Logo.gif"}
          width={120}
          height={330}
          alt="Logo Image"
        />
      </div>
      <div className="md:w-[400px] w-[250px] mx-auto mt-[140px]">
        <div>
          <label className="text-[#B3B3B3] text-[12px]">Email*</label>
          <input
            className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-2">
          <label className="text-[#B3B3B3] text-[12px]">Password*</label>
          <input
            className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between items-center mt-[6px]">
          <div className="flex justify-between items-center text-[#494949] md:w-[40%] w-[50%]">
            <div className="w-[10%]">
              <input
                className="w-full bg-[#494949] text-[#494949] rounded"
                type="checkbox"
              />
            </div>
            <div className="w-[87%] flex items-center">
              <p className="md:text-[12px] text-[10px]">Remember for 30 days</p>
            </div>
          </div>
          <div>
            <Link
              href={""}
              className="md:text-[13px] text-[11px] text-[#6F79DA] hover:underline"
            >
              forget password?
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <button
            className="w-full bg-[#7A844A] text-[#0F0F10] p-3 rounded-[9px] mt-4 text-[13px] m-auto"
            onClick={handleSubmit}
          >
            Get Started Now
          </button>
        </div>
        <div className="mt-3 flex justify-center items-center">
          <p className="text-[#494949] text-[12px]">
            Don&apost have an account?
          </p>

          <Link
            href="/register"
            className="hover:text-[#6F79DA] text-[12px] ml-1 hover:underline text-white"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
