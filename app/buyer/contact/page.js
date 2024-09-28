import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0f0f10] md:p-8 p-4 w-full">
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
          <p className="text-[#8c945a] md:text-[13px] text-[10px] font-semibold md:block hidden">
            Contact Information
          </p>
          <p className="text-[#8c945a] md:text-[13px] text-[10px] font-semibold md:hidden block">
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
      <div className="md:flex justify-between md:w-[80%] w-full block mx-auto mt-7">
        <div className="md:w-[45%] w-full">
          <div className="flex justify-start items-center mt-5 w-full">
            <div>
              <Image
                src={"/images/ticket.png"}
                width={220}
                height={300}
                className="rounded-xl hidden md:block"
                alt="Icon"
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
          <div className="w-full flex justify-between items-center border-y-[2px] border-dashed border-y-[#494949] mt-5">
            <div className="md:block hidden w-[30%]"></div>
            <div className=" w-full md:w-[70%] flex  justify-between items-center py-4 px-0 text-[#494949] ">
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
            <div className="w-[30%] md:block hidden"></div>
            <div className="w-full md:w-[70%] flex justify-between items-center md:py-2 py-0 px-0 text-[#494949] md:mt-1 mt-0">
              <div>
                <p className="md:text-[17px] text-[13px] font-semibold md:ml-2 ml-0 text-white">
                  Sub Total:
                </p>
              </div>
              <div className=" text-white w-auto text-right">
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
        <div className="md:w-[45%] w-full md:mt-0 mt-3">
          <div className="md:flex md:justify-between items-center w-full">
            <div className="md:w-[48%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">First Name*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="md:w-[48%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">Last Name*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between items-center w-full mt-[10px]">
            <div className="md:w-[48%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">Country*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter country"
              />
            </div>
            <div className="md:w-[48%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">City*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter city"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between items-center w-full mt-[10px]">
            <div className="md:w-[32%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">Street*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter street"
              />
            </div>
            <div className="md:w-[32%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">House No*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter house#"
              />
            </div>
            <div className="md:w-[32%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">Postal Code*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter postal code"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between items-center w-full mt-[10px]">
            <div className="md:w-[32%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">Birthday*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter Date"
              />
            </div>
            <div className="md:w-[32%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">Enter Email*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="md:w-[32%] w-full">
              <label className="text-[#B3B3B3] text-[12px]">
                Confirm Email*
              </label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="email"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="flex justify-start items-center text-[#494949] mt-3">
            <div className="">
              <input
                className="w-full bg-[#494949] text-[#494949] rounded"
                type="checkbox"
              />
            </div>
            <div className="ml-2">
              <p className="text-[12px]">Confirm the terms of use</p>
            </div>
          </div>
          <div className="flex justify-between items-end w-full">
            <div className="md:w-[82%] w-[70%]">
              <label className="text-[#B3B3B3] text-[12px]">Coupon Code*</label>
              <input
                className="w-full bg-[#171617] text-[#494949] p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                type="text"
                placeholder="Enter Coupon Code"
              />
            </div>
            <div className="md:w-[15%] w-[25%] bg-[#8c945a] text-[#0f0f10] font-bold text-[13px] p-[10px] rounded-xl text-center mb-[2px]">
              Done
            </div>
          </div>
          <div className="text-justify w-full text-[#494949] text-[12px] mt-6">
            <span class="text-white font-semibold">Note: </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </div>
        </div>
      </div>

      <div className="md:w-[20%] w-[70%] m-auto flex justify-between items-center mt-8">
        <Link
          href={"/buyer/ticket"}
          className="bg-white text-[#0F0F10] py-2 px-6 w-[45%] flex justify-center items-center font-bold rounded-xl md:text-[13px] text-[12px]"
        >
          <IoIosArrowRoundBack className="mr-1 text-[#0F0F10] " />
          Back
        </Link>
        <Link
          href={"/buyer/payment"}
          className="bg-[#8c945a] text-[#0F0F10] py-2 md:px-6 px-2 w-[45%] flex justify-center items-center font-bold rounded-xl md:text-[13px] text-[12px]"
        >
          Next Step
          <IoIosArrowRoundForward className="ml-1 text-[#0F0F10]" />
        </Link>
      </div>
    </main>
  );
}
