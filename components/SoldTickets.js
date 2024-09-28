import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import dynamic from "next/dynamic";
import { colors, data } from "@/constants/ticketsSold";
// import PieChartGraph from "./PieChartGraph";

const PieChartGraph = dynamic(() => import("./PieChartGraph"), {
  ssr: false,
  loading: () => <p>Loading Chart...</p>,
});

export default function SoldTickets() {
  console.log("SoldTickets rendered", { data, colors });
  return (
    <div className="bg-[#1b1b1b] md:w-[45%] w-full rounded-xl md:p-8 p-4 md:mt-0 mt-4">
      <div className="flex justify-between items-center">
        <div className="text-[22px] text-white font-semibold">
          Total Ticket Sold
        </div>
        <div className="flex justify-between items-center p-2 bg-[#0f0f10] text-[10px] text-white rounded-md">
          <p>7 days</p>
          <IoIosArrowDown className="ml-1" />
        </div>
      </div>
      <div className="md:flex md:justify-between block items-center">
        <div className="md:w-[45%] w-full">
          <div className="flex justify-start items-center gap-4 mt-3">
            <p className="text-white text-[22px] font-bold">23,876</p>
            <p className="text-[#494949] text-[12px]">/ From 30,000</p>
          </div>
          <div className="flex justify-start items-center mt-2">
            <p className="text-[#494949] text-[12px]">Total Ticket Sell</p>
            <div className="flex justify-between items-center bg-[#7a844a] rounded-xl py-1 px-2 ml-2">
              <Image src={"/images/tren.png"} width={12} height={12} alt="Icon" />
              <p className="text-white text-[12px] ml-2">4.1%</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 mt-10">
            <div className="w-[25px] h-[25px] bg-white rounded-md"></div>
            <p className="text-[#494949] text-[12px]">Tickets</p>
            <p className="text-white text-[17px]">€ 8,234.19</p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-4">
            <div className="w-[25px] h-[25px] bg-[#8c945a] rounded-md"></div>
            <p className="text-[#494949] text-[12px]">Fee</p>
            <p className="text-white text-[17px]">€ 734.99</p>
          </div>
          <div className="flex justify-start items-center gap-3 mt-4">
            <div className="w-[25px] h-[25px] bg-[#494949] rounded-md"></div>
            <p className="text-[#494949] text-[12px]">Provider fee</p>
            <p className="text-white text-[17px]">€ 215.17</p>
          </div>
        </div>
        <div className="md:w-auto w-full md:block flex justify-center items-center">
          <PieChartGraph />
        </div>
      </div>
    </div>
  );
}
