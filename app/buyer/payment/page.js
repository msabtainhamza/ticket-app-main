"use client";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirmClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <main className="min-h-screen bg-[#0f0f10] md:p-8 p-3 w-full">
      <div className="flex justify-center items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Image" />
      </div>
      <div className="md:w-[70%] w-full flex justify-center items-center mx-auto mt-5">
        <div>
          <p className="text-[#B3B3B3] md:text-[13px] text-[10px] font-semibold md:block hidden">
            Ticket
          </p>
          <p className="text-[#B3B3B3] md:text-[13px] text-[10px] font-semibold md:hidden block">
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
          <p className="text-[#8c945a] md:text-[13px] text-[10px] font-semibold">
            Payment
          </p>
        </div>
      </div>
      <div className="md:flex justify-between md:w-[80%] w-full mx-auto mt-7">
        <div className="md:w-[45%] w-full">
          <div className="flex justify-start items-center mt-5 w-full">
            <div>
              <Image
                src={"/images/ticket.png"}
                width={220}
                height={300}
                className="rounded-xl hidden md:block"
                alt="Image"
              />
            </div>
            <div className="ml-10">
              <div className="flex justify-start items-center">
                <Image
                  src={"/images/date.png"}
                  width={13}
                  height={10}
                  alt="Icon"
                />
                <p className="text-[#B3B3B3] text-[11px] ml-1">
                  16 April, 2024
                </p>
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
                  <li>See Backstage</li>
                  <li>Choosen Days</li>
                  <li>and the raw</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="border-dashed border-y-[#494949] w-full border-y-[2px] flex justify-between items-center md:py-4 py-2 px-0 text-[#494949] mt-3">
            <div className="">
              <p className="md:text-[13px] text-[10px] font-semibold">
                Ticket Details
              </p>
            </div>
            <div>
              <p className="md:text-[13px] text-[10px] font-semibold">
                Single Price
              </p>
            </div>
            <div>
              <p className="md:text-[13px] text-[10px] font-semibold ml-2">
                Total Price
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center md:py-4 py-2 px-0 text-white md:mt-1 mt-0">
            <div className="">
              <p className="md:text-[13px] text-[10px] font-semibold">
                01*VIP Ticket
              </p>
            </div>
            <div className="flex justify-center items-center">
              <p className="md:text-[17px] text-[13px] font-semibold">01</p>
              <p className="md:text-[12px] text-[10px]  font-semibold mx-1">
                * $
              </p>
              <p className="md:text-[17px] text-[13px]  font-semibold">36.99</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="md:text-[12px] text-[10px] font-semibold mx-1">$</p>
              <p className="md:text-[17px] text-[13px] font-semibold">36.99</p>
            </div>
          </div>
          <div className="border-dashed border-y-[#494949] w-full border-y-[2px] flex justify-between items-center md:py-4 py-2 px-0 text-[#494949] md:mt-3 mt-1">
            <div className="">
              <p className="md:text-[17px] text-[13px] font-semibold text-white">
                Booking Fee:
              </p>
              <p className="md:text-[10px] text-[8px] font-semibold ">
                See mbrace the bold, the unconventional, and the raw
              </p>
            </div>
            <div className="flex justify-center items-center text-white">
              <p className="text-[12px] font-semibold mx-1">$</p>
              <p className="text-[17px] font-semibold">1.09</p>
            </div>
          </div>
          <div className="border-dashed border-b-[#494949] w-full border-b-[2px] flex justify-between items-center md:-4 py-2 px-0 text-[#494949] mt-1">
            <div className="">
              <p className="md:text-[17px] text-[13px] font-semibold text-white">
                Sub Total:
              </p>
            </div>
            <div className="items-center text-white">
              <div className="flex justify-end items-center">
                <p className="md:text-[13px] text-[10px] font-semibold">$</p>
                <p className="md:text-[22px] text-[15px] font-semibold ml-1">
                  36.99
                </p>
              </div>
              <p className="md:text-[10px] text-[8px] font-semibold text-[#494949]">
                See mbrace the bold, the unconventional, and the raw
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[45%] w-full pt-2">
          <p className="text-[14px] text-white">Payment Method</p>
          <div className="flex justify-start items-center md:p-4 p-2 bg-[#2f3322] border border-[#8c945a] md:w-[30%] w-[35%] rounded-xl mt-2">
            <Image
              src={"/images/paypal.png"}
              width={20}
              height={20}
              alt="Icon"
            />
            <p className="text-white text-[14px] ml-4">PAYPAL</p>
          </div>
        </div>
      </div>

      <div className="md:w-[20%] w-[70%] m-auto flex justify-between items-center mt-8">
        <Link
          href={"/buyer/contact"}
          className="bg-white text-[#0F0F10] py-2 px-6 w-[45%] flex justify-center items-center font-bold rounded-xl md:text-[13px] text-[12px]"
        >
          <IoIosArrowRoundBack className="mr-1 text-[#0F0F10] text-[20px]" />
          Back
        </Link>
        <button
          onClick={handleConfirmClick}
          className="bg-[#8c945a] text-[#0F0F10] py-2 md:px-6 px-2 w-[45%] flex justify-center items-center font-bold rounded-xl md:text-[13px] text-[12px]"
        >
          Confirm
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-50 absolute inset-0"></div>
          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-center text-xl font-bold text-black mb-4">
              Thank you for your buy!
            </h2>
            <p className="text-center text-black mb-4">
              Your ticket has been sent to your email – Do you want to save the
              ticket as a photo?
            </p>
            <div className="flex justify-around">
              <Link
                href={"/buyer"}
                onClick={handleClosePopup} // Handle Yes click
                className="bg-[#8c945a] text-white py-2 px-4 rounded-lg"
              >
                Yes
              </Link>
              <Link
                href={"/buyer"}
                onClick={handleClosePopup} // Handle No click
                className="bg-gray-400 text-white py-2 px-4 rounded-lg"
              >
                No
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
