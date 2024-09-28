import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen w-[100vw] bg-[#0f0f10] p-8">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/Logo.gif"}
          width={120}
          height={330}
          alt="logo image"
        />
      </div>
      <div className="md:w-[600px] w-[250px] mx-auto mt-[60px]">
        <div className="md:flex md:justify-between items-center w-full">
          <div className="md:w-[48%] w-[full]">
            <label className="text-[#B3B3B3] text-[12px]">First Name*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Last Name*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="md:flex md:justify-between items-center w-full mt-[10px]">
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Country*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter country"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">City*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter city"
            />
          </div>
        </div>
        <div className="md:flex md:justify-between items-center w-full mt-[10px]">
          <div className="md:w-[32%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Stree No*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter street"
            />
          </div>
          <div className="md:w-[32%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">House No*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter house#"
            />
          </div>
          <div className="md:w-[32%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Postal Code*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="text"
              placeholder="Enter postal code"
            />
          </div>
        </div>
        <div className="md:flex md:justify-between items-center w-full mt-[10px]">
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Email*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Confirm Email*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="email"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="md:flex md:justify-between items-center w-full mt-[10px]">
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">Password*</label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="md:w-[48%] w-full">
            <label className="text-[#B3B3B3] text-[12px]">
              Confirm Password*
            </label>
            <input
              className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="mt-2">
          <button className="w-full bg-[#7A844A] text-[#0F0F10] p-3 rounded-[9px] mt-4 text-[13px]">
            Get Started Now
          </button>
        </div>
        <div className="mt-3 flex justify-center items-center">
          <p className="text-[#494949] text-[12px]">Already have an account?</p>
          <Link
            href="/login"
            className="hover:text-[#6F79DA] text-[12px] ml-1 hover:underline text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
