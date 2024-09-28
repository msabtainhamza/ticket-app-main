"use client";
import Image from "next/image";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

export default function TicketInfo() {
  const [counter, setCounter] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("VIP"); // Default ticket type

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
    console.log(counter);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectTicketType = (ticketType) => {
    setSelectedTicket(ticketType);
    setIsOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0f0f10] md:p-8 p-3 w-full">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/Logo.gif"}
          width={70}
          height={330}
          alt="Logo Image"
        />
      </div>
      <div className="md:w-[70%] w-full flex justify-center items-center mx-auto mt-5">
        <div>
          <p className="text-[#8c945a] md:text-[13px] text-[10px] font-semibold md:block hidden">
            Ticket
          </p>
          <p className="text-[#8c945a] md:text-[13px] text-[10px] font-semibold md:hidden block">
            Ticket
          </p>
        </div>
        <div className="md:flex justify-center items-center hidden px-2">
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
          <Image src={"/images/wline.png"} width={160} height={30} alt="Icon" />
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
          <Image src={"/images/wline.png"} width={50} height={30} alt="Icon" />
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
        </div>
        <div>
          <p className="text-[#B3B3B3] md:text-[13px] text-[10px] font-semibold md:block hidden">
            Contact Information
          </p>
          <p className="text-[#B3B3B3] md:text-[13px] text-[10px] font-semibold md:hidden block">
            Contact
          </p>
        </div>
        <div className="md:flex justify-center items-center hidden px-2">
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
          <Image src={"/images/wline.png"} width={160} height={30} alt="Icon" />
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
          <Image src={"/images/wline.png"} width={50} height={30} alt="Icon" />
          <Image src={"/images/wcircle.png"} width={7} height={30} alt="Icon" />
        </div>
        <div>
          <p className="text-[#B3B3B3] md:text-[13px] text-[10px] font-semibold">
            Payment
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-center items-center mt-5">
        <div>
          <Image
            src={"/images/ticket.png"}
            width={200}
            height={300}
            className="rounded-xl md:block hidden"
            alt="Ticket Image"
          />
        </div>
        <div className="ml-4 md:w-auto w-full">
          <div className="flex justify-start items-center">
            <Image src={"/images/date.png"} width={13} height={10} alt="Icon" />
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
                alt="Icon"
              />
              <p className="ml-1 text-[10px] text-[#8c945a]">10:00 PM</p>
            </div>
          </div>
          <div className="flex justify-start items-center mt-1">
            <Image
              src={"/images/address.png"}
              width={14}
              height={13}
              alt="Icon"
            />
            <p className="text-[#494949] text-[12px] ml-1">
              Alt-Moabit 41, Neuburg, Freistaat Bayern
            </p>
          </div>
          <div className="flex justify-start items-center mt-3">
            <p className="text-[10px] text-[#494949]">Price</p>
            <p className="text-white text-[12px] ml-4 font-bold">$</p>
            <p className="text-white text-[22px] ml-1 font-bold">36.99</p>
            {/* <button className="px-1 py-[2px] bg-[#8c945a] text-[10px] rounded-md ml-3 items-center">
              . ONLINE
            </button> */}
          </div>
          <div className=" flez flex-col justify-start items-center mt-3 md:hidden block">
            <p className="md:text-[12px] text-[10px] text-white">Privileges:</p>
            <ol className="text-[10px] text-[#494949] list-disc ml-4">
              <li>See Backstage</li>
              <li>Choosen Days</li>
              <li>and the raw</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="md:w-[70%] w-full mx-auto mt-6 ">
        <div className="border-dashed border-y-[#494949] w-full border-y-[2px] flex justify-between items-center py-4 px-0 text-[#494949]">
          <div className="md:block hidden w-[30%]">
            <p className="text-[13px] font-semibold">Ticket Details</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold">Type</p>
          </div>
          <div>
            <p className=" text-[13px] font-semibold ml-2">Single Price</p>
          </div>
          <div>
            <p className=" text-[13px] font-semibold">Quantity</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold">Total Price</p>
          </div>
        </div>
        <div className="w-full flex justify-between items-start md:mt-4 mt-2 px-0 text-[#494949]">
          <div className="w-[30%] md:block hidden">
            <div className="flex justify-start items-center">
              <Image
                src={"/images/date.png"}
                width={13}
                height={10}
                alt="Icon"
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
                  alt="Icon"
                />
                <p className="ml-1 text-[10px] text-[#8c945a]">10:00 PM</p>
              </div>
            </div>
            <div className="flex justify-start items-center mt-1">
              <Image
                src={"/images/address.png"}
                width={14}
                height={13}
                alt="Icon"
              />
              <p className="text-[#494949] text-[12px] ml-1">
                Alt-Moabit 41, Neuburg, Freistaat Bayern
              </p>
            </div>
            <div className=" flez flex-col justify-start items-center mt-3">
              <p className="md:text-[12px] text-[10px] text-white">
                Privileges:
              </p>
              <ol className="text-[10px] text-[#494949] list-disc ml-4">
                <li>See mbrace the bold</li>
                <li>the unconventional</li>
                <li>and the raw</li>
              </ol>
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-[#1b1b1b] md:p-2 p-1 flex justify-center items-center text-white rounded-md cursor-pointer"
              onClick={toggleDropdown}
            >
              <p className="md:text-[13px] text-[10px] font-semibold">
                {selectedTicket}
              </p>
              {isOpen ? (
                <IoIosArrowUp className="md:text-[13px] text-[10px] md:ml-2 ml-[2px]" />
              ) : (
                <IoIosArrowDown className="md:text-[13px] text-[10px] md:ml-2 ml-[2px]" />
              )}
            </div>

            {isOpen && (
              <div className="absolute top-full mt-2 bg-[#1b1b1b] text-white rounded-md w-full z-10 flex justify-center items-center flex-col">
                <div
                  className="p-2 hover:bg-gray-700 cursor-pointer md:text-[13px] text-[10px] w-fit"
                  onClick={() => selectTicketType("VIP")}
                >
                  VIP
                </div>
                <div
                  className="p-2 hover:bg-gray-700 cursor-pointer md:text-[13px] text-[10px] w-fit"
                  onClick={() => selectTicketType("Regular")}
                >
                  Regular
                </div>
                <div
                  className="p-2 hover:bg-gray-700 cursor-pointer md:text-[13px] text-[10px] w-fit"
                  onClick={() => selectTicketType("Student")}
                >
                  Student
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-start items-center text-white">
            <p className="md:text-[13px] text-[10px] font-semibold">$</p>
            <p className="md:text-[22px] text-[15px] font-semibold md:ml-1 ml-[6px]">
              36.99
            </p>
          </div>
          <div className="border border-[#494949] px-2 py-1 flex justify-between items-center w-[60px] rounded-md text-white md:text-[13px] text-[10px] font-semibold">
            <p onClick={decrement} className="cursor-pointer">
              -
            </p>
            <p>{counter}</p>
            <p onClick={increment} className="cursor-pointer">
              +
            </p>
          </div>
          <div className="flex justify-start items-center text-white">
            <p className="md:text-[13px] text-[10px] font-semibold">$</p>
            <p className="md:text-[22px] text-[15px] font-semibold ml-1">
              36.99
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center border-y-[2px] border-dashed border-y-[#494949] mt-5">
          <div className="md:block hidden w-[50%]"></div>
          <div className=" w-full md:w-[50%] flex  justify-between items-center py-4 px-0 text-[#494949] ">
            <div>
              <p className="md:text-[17px] text-[13px] font-semibold md:ml-2 ml-0 text-white">
                Booking Fee:
              </p>
              <p className="md:text-[10px] text-[8px] font-semibold md:ml-2 ml-0">
                See mbrace the bold, the unconventional, and the raw
              </p>
            </div>
            <div className="flex items-center text-white w-[17%] justify-end">
              <p className="tmd:ext-[13px] text-[10px] font-semibold">$</p>
              <p className="md:text-[22px] text-[15px] font-semibold ml-1">
                1.09
              </p>
            </div>
          </div>
        </div>
        <div className="border-dashed border-b-[#494949] w-full border-b-[2px] flex justify-between items-center md:py-1 py-0 px-0 text-[#494949]  mt-1">
          <div className="w-[50%] md:block hidden"></div>
          <div className="w-full md:w-[50%] flex justify-between items-center md:py-4 py-[2px] px-0 text-[#494949] md:mt-2 mt-1">
            <div>
              <p className="md:text-[17px] text-[13px] font-semibold md:ml-2 ml-0 text-white">
                Sub Total:
              </p>
            </div>
            <div className=" text-white md:w-[34.3%] w-auto text-right">
              <div className="flex justify-end items-center">
                <p className="md:text-[13px] text-[10px] font-semibold">$</p>
                <p className="md:text-[22px] text-[15px] font-semibold ml-1">
                  36.99
                </p>
              </div>
              <p className=" text-[10px] font-semibold text-[#494949]">
                the unconventional, and the raw
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[20%] w-[70%] m-auto flex justify-between items-center mt-8">
        <Link
          href={"/buyer"}
          className="bg-white text-[#0F0F10] py-2 px-6 w-[45%] flex justify-center items-center font-bold rounded-xl md:text-[13px] text-[12px]"
        >
          <IoIosArrowRoundBack className="mr-1 text-[#0F0F10] " />
          Back
        </Link>
        <Link
          href={"/buyer/contact"}
          className="bg-[#8c945a] text-[#0F0F10] py-2 md:px-6 px-2 w-[45%] flex justify-center items-center font-bold rounded-xl md:text-[13px] text-[12px]"
        >
          Next Step
          <IoIosArrowRoundForward className="ml-1 text-[#0F0F10]" />
        </Link>
      </div>
    </main>
  );
}
