"use client";
import Image from "next/image";
import { data } from "@/constants/sellerGraph";
import EventSellChart from "@/components/EventSellChart";

export default function SellerGraph() {
  return (
    <div className="bg-[#1b1b1b] md:w-[60%] w-full rounded-xl p-4">
      <p className="text-[#494949] md:text-[12px] text-[10px]">
        Total Ticket Sell
      </p>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center">
          <p className="text-white md:text-[32px] text-[17px] font-bold">
            99,889
          </p>
          <Image
            src={"/images/tren.png"}
            width={17}
            height={12}
            className="ml-2"
            alt="Icon"
          />
          <p className="text-[#7a844a] md:text-[12px] text-[10px] ml-2">4.1%</p>
          <p className="text-[#494949] text-[12px] ml-2 md:block hidden">
            vs 3,938 last year
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-[#0f0f10] md:p-2 p-[6px] text-white rounded-md md:text-[17px] text-[12px]">
            Monthly
          </div>
          <div className="bg-[#0f0f10] p-[14px] rounded-md ml-2 md:block hidden">
            <Image src={"/images/graph-list.png"} width={14} height={50} alt="Icon" />
          </div>
        </div>
      </div>
      <div className="mt-5 w-full">
        <EventSellChart data={data} />
      </div>
    </div>
  );
}
