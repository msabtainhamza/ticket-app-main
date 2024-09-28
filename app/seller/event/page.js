import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import ProgressBar from "@/components/ProgressBar";
import { data } from "@/constants/sellerGraph";
import EventSellChart from "@/components/EventSellChart";
import { AiOutlineEdit } from "react-icons/ai";

const Ticket = () => {
  return (
    <div className="flex justify-between items-center border-b border-b-[#0f0f10] p-1 mt-4">
      <div className="flex justify-start items-end gap-[120px]">
        <div>
          <p className="text-white text-[14px]">D` BROWN CAPITALISM</p>
          <p className="text-[12px] text-[#494949]">BY BLACK MAMBA</p>
        </div>
        <p className="uppercase text-[#7a844a] text-[12px] font-semibold">
          Standard
        </p>
      </div>
      <div>
        <p className="text-white text-[11px] uppercase">APR 2023</p>
        <p className="text-[#7a844a] text-[11px]">Insights</p>
      </div>
    </div>
  );
};

export default function Event() {
  return (
    <div className="min-h-screen w-full bg-[#0f0f10] md:p-7 p-5">
      <div className="flex justify-between items-center">
        <Image
          src={"/images/Logo.gif"}
          width={70}
          height={330}
          alt="Logo Image"
        />
        <div className="flex justify-between items-center w-[16%]">
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
              <p className="text-[#494949] text-[11px] font-bold">
                Welcome back
              </p>
              <p className="text-white text-[14px] mt-[2px] font-semibold">
                Andrew Johnson
              </p>
            </div>
            <div className="bg-[#171617] rounded-[50%] p-2 text-[12px] text-white">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <p className="text-white text-[22px] font-bold">Event Overview</p>
          <p className="text-[#494949] text-[12px]">Event name goes here</p>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-4">
        <div className="w-[46%] bg-[#1b1b1b] rounded-xl p-5">
          <p className="text-[#494949] text-[12px]">Total Ticket Sell</p>
          <div className="flex justify-between items-center w-full mb-5">
            <div className="flex justify-between items-center">
              <p className="text-white text-[32px] font-bold">99,889</p>
              <Image
                src={"/images/tren.png"}
                width={17}
                height={12}
                className="ml-2"
                alt="Trend Icon"
              />
              <p className="text-[#7a844a] text-[12px] ml-2">4.1%</p>
              <p className="text-[#494949] text-[12px] ml-2">
                vs 3,938 last year
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="bg-[#0f0f10] p-2 text-white rounded-md">
                Monthly
              </div>
              <div className="bg-[#0f0f10] p-[14px] rounded-md ml-2">
                <Image
                  src={"/images/graph-list.png"}
                  width={14}
                  height={50}
                  alt="Graph Icon"
                />
              </div>
            </div>
          </div>
          <EventSellChart data={data} />
        </div>
        {/* <SellerGraph /> */}
        <div className="p-4 bg-[#1b1b1b] rounded-xl w-[25%]">
          <div className="flex justify-between items-center">
            <p className="text-white text-[22px] font-bold">Heat Map</p>
            <div className="flex justify-end items-center gap-1 px-2 py-1 bg-[#494949] text-white text-[12px] rounded-md">
              <p>This Month</p>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="h-[286px] w-full"></div>
          <ProgressBar
            label="Average Selling"
            value={92}
            color="#7a844a"
            percentage={92}
          />
          <ProgressBar
            label="User Grain"
            value={67}
            color="#0f0f10"
            percentage={67}
          />
        </div>
        <div className="p-4 bg-[#1b1b1b] rounded-xl w-[25%]">
          <div className="flex justify-between items-center">
            <p className="text-white text-[22px] font-bold">Heat Map</p>
            <div className="flex justify-end items-center gap-1 px-2 py-1 bg-[#494949] text-white text-[12px] rounded-md">
              <p>This Month</p>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="h-[286px] w-full"></div>
          <ProgressBar
            label="Average Selling"
            value={92}
            color="#7a844a"
            percentage={92}
          />
          <ProgressBar
            label="User Grain"
            value={67}
            color="#0f0f10"
            percentage={67}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center w-full">
        <div className="w-[73%] bg-[#1b1b1b] rounded-xl p-5">
          <div>
            <p className="text-white text-[29px] font-bold">
              74,089
              <span className="text-[#494949] text-[12px] ml-1">
                / Total Ticket
              </span>
            </p>
            <p className="text-[#494949] text-[12px]">
              Available Ticket -
              <span className="text-white text-[12px] ml-1">25,800</span>
            </p>
          </div>
          <div className="mt-4">
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
          </div>
        </div>
        <div className="w-[25%]">
          <div className="bg-white w-full rounded-xl py-3 px-5 flex justify-start gap-20 items-center">
            <div className="bg-[#0f0f10] rounded-[50%] p-2 w-fit">
              <Image
                src={"/images/sell.png"}
                width={40}
                height={330}
                alt="Sell Icon"
              />
            </div>
            <div>
              <p className="text-[#1b1b1b] text-[19px] font-bold mt-1">
                $8,234.19
              </p>
              <p className="text-[#1b1b1b] text-[11px] mt-[2px] font-semibold">
                Total Sell (USD)
              </p>
            </div>
          </div>
          <div className="mt-6  w-full bg-[#1b1b1b] p-5 rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-[13px]">Invoice</p>
                <p className="text-[#494949] text-[11px]">
                  See mbrace the bold, See mbrace the bold,
                </p>
              </div>
              <AiOutlineEdit className="text-[#7a844a] text-[29px]" />
            </div>
            <div className="w-full  mt-5">
              <div className="h-[270px] w-full bg-white mt-2"></div>
              <button className="w-full bg-[#7a844a] text-[#0F0F10] p-2 mt-8 rounded-md font-semibold">
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
