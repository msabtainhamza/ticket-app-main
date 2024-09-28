import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const Ticket = () => {
  return (
    <div className="flex justify-between items-center border-b border-b-[#0f0f10] p-1 md:mt-4 mt-2">
      <div>
        <p className="text-white md:text-[14px] text-[12px]">
          D` BROWN CAPITALISM
        </p>
        <p className="md:text-[12px] text-[10px] text-[#494949]">
          BY BLACK MAMBA
        </p>
      </div>
      <div>
        <p className="text-white md:text-[11px] text-[9px] uppercase">
          APR 2023
        </p>
        <Link
          className="text-[#7a844a] md:text-[11px] text-[9px]"
          href={"/seller/event"}
        >
          Insights
        </Link>
      </div>
    </div>
  );
};

export default function Past() {
  return (
    <div className="min-h-screen w-full bg-[#0f0f10] md:p-11 p-5">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <Image
          src={"/images/Logo.gif"}
          width={70}
          height={330}
          alt="Logo Image"
        />
        <div className="flex justify-between items-center md:w-[16%] w-full md:mt-0 mt-3">
          <div>
            <Image
              src={"/images/user.png"}
              width={40}
              height={40}
              className="rounded-xl"
              alt="User Icon"
            />
          </div>
          <div className="flex justify-between items-center bg-[#1B1B1B] rounded-xl p-2 w-[80%]">
            <div>
              <p className="text-[#494949] md:text-[11px] text-[10px] font-bold">
                Welcome back
              </p>
              <p className="text-white md;text-[14px] text-[12px] mt-[2px] font-semibold">
                Andrew Johnson
              </p>
            </div>
            <div className="bg-[#171617] rounded-[50%] p-2 text-[12px] text-white">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1b1b1b] md:p-5 p-3 rounded-xl mt-6">
        <div className="flex justify-between items-center">
          <div className="text-white md:text-[22px] text-[14px] font-semibold uppercase">
            Past Events
            <p className="text-[11px] text-[#494949] mt-1 md:block hidden">
              See mbrace the bold, the unconventional, and the raw
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-[#0f0f10] md:p-2 p-1 text-white md:text-[17px] text-[12px] rounded-md">
              2024
            </div>
            <div className="bg-[#0f0f10] md:p-[14px] p-[7px] rounded-md ml-2">
              <Image
                src={"/images/graph-list.png"}
                width={14}
                height={50}
                alt="Graph Icon"
              />
            </div>
          </div>
        </div>
        <div className="mt-7">
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}
