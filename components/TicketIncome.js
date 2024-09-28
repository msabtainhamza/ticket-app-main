import LineChartGraph from "./LineChartGraph";
import { data } from "@/constants/ticketIncome";

export default function TicketIncome() {
  return (
    <div className="bg-[#1b1b1b] w-[50%] rounded-xl p-3">
      <div className="flex justify-start items-center gap-4">
        <p className="text-white text-[32px] font-bold ml-1">$101,851</p>
        <p className="text-[#494949] text-[14px] ml-2">
          income from 11,156 tickets sold
        </p>
      </div>
      <div className="mt-5 w-full">
        <LineChartGraph data={data} lineKey={"Income"} />
      </div>
    </div>
  );
}
