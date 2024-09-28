import { IoIosArrowDown } from "react-icons/io";
import HistoryTable from "./HistoryTable";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function History({ navigartion }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(navigartion);
  };
  return (
    <div className="bg-[#1b1b1b] md:w-[48%] w-full md:mt-0 mt-4 rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div className="md:text-[22px] text-[17px] text-white font-semibold">
          Transactions
        </div>
        <div className="flex justify-between items-center p-[6px] bg-[#0f0f10] text-[10px] text-white rounded-md">
          <p>Current Week</p>
          <IoIosArrowDown className="ml-1" />
        </div>
      </div>
      <p className="text-[#494949] text-[14px] mt-3">
        Total 3,102 transaction this month
      </p>
      <HistoryTable />
      <div
        className="text-[#8c945a] text-[14px] flex justify-end items-center mt-3 cursor-pointer"
        onClick={handleClick}
      >
        <p>View All Transactions</p>
        <FaArrowRight />
      </div>
    </div>
  );
}
