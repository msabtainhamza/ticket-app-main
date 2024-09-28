import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import Link from "next/link";

const Ticket = () => {
  return (
    <div className="md:flex block justify-between items-center mt-4 py-4 border-b border-b-[#0f0f10]">
      <div className="md:flex md:justify-center items-center">
        <Link href="/seller/event">
          <Image
            src={"/images/ticket.png"}
            width={200}
            height={300}
            className="rounded-xl md:block hidden"
            alt="Ticket Image"
          />
        </Link>
        <div className="ml-4 md:w-auto w-full">
          <div className="flex justify-start items-center">
            <Image
              src={"/images/date.png"}
              width={13}
              height={10}
              alt="Date Icon"
            />
            <p className="text-[#B3B3B3] text-[11px] ml-1">16 April, 2024</p>
          </div>
          <p className="text-white text-[15px] mt-1">D` BROWN CAPITALISM</p>
          <div className="flex justify-start items-center">
            <p className="text-[#494949] text-[10px]">BY BLACK MAMBA</p>
            <p className="text-[#8c945a] text-[11px] ml-8">|</p>
            <div className="flex justify-between items-center ml-4">
              <Image
                src={"/images/time.png"}
                width={13}
                height={13}
                alt="Time Icon"
              />
              <p className="ml-1 text-[10px] text-[#8c945a]">10:00 PM</p>
            </div>
          </div>
          <div className="flex justify-start items-center mt-1">
            <Image src={"/images/address.png"} width={14} height={13} />
            <p className="text-[#494949] text-[12px] ml-1">
              Alt-Moabit 41, Neuburg, Freistaat Bayern
            </p>
          </div>
          <div className="flex justify-start items-center mt-3">
            <p className="text-[10px] text-[#494949]">Price</p>
            <p className="text-white text-[12px] ml-4 font-bold">$</p>
            <p className="text-white text-[22px] ml-1 font-bold">36.99</p>
            <button className="px-1 py-[2px] bg-[#8c945a] text-[10px] rounded-md ml-3 items-center">
              . ONLINE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#7a844a] py-2 px-4 text-[#1b1b1b] text-[19px] rounded-md flex md:justify-between justify-center items-center gap-2 font-semibold">
        <AiOutlineEdit />
        <p className="">Edit</p>
      </div>
    </div>
  );
};

export default function Upcoming() {
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
      <div className="w-full bg-[#1b1b1b] rounded-xl md:mt-6 mt-4 md:p-5 p-3">
        <div className="flex justify-between items-center w-full mb-0 ">
          <div className="">
            <p className="text-white md:text-[32px] text-[14px] font-bold">
              Upcoming Events
            </p>
            <p className="text-[#494949] text-[12px] md:block hidden">
              See mbrace the bold, the unconventional, and the raw
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-[#0f0f10] md:p-2 p-1 text-white md:text-[17px] text-[12px] rounded-md">
              Online
            </div>
            <div className="bg-[#0f0f10] md:p-[14px] p-[7px] rounded-md ml-2">
              <Image src={"/images/graph-list.png"} width={14} height={50} />
            </div>
          </div>
        </div>
        <Ticket />
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
  );
}
