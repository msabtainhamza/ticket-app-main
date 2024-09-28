import Image from "next/image";
import LineChartGraph from "./LineChartGraph";
import { data } from "@/constants/comissions";

export default function TotalProfiles() {
  return (
    <div className="bg-[#1b1b1b] md:w-[48%] w-full rounded-xl p-4 md:mb-0 mb-4">
      <p className="text-white md:text-[17px] text-[12px] font-bold">
        Commission
      </p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <p className="text-white md:text-[15px] text-[10px] font-bold">$</p>
          <p className="text-white md:text-[32px] text-[17px] font-bold ml-1">
            10,953.51
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
          <div className="bg-[#0f0f10] md:p-2 p-1 md:text-[14px] text-[10px] text-white rounded-md">
            Monthly
          </div>
        </div>
      </div>
      <div className="mt-5 w-full">
        <LineChartGraph data={data} lineKey={"Total Commission"} />
      </div>
    </div>
  );
}
