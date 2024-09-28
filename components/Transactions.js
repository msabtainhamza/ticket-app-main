import { IoIosArrowDown } from "react-icons/io";
import TransactionTable from "./TransactionsTable";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Transactions() {
  return (
    <div className="bg-[#1b1b1b] md:w-[48%] w-full rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div className="text-[22px] text-white font-semibold">History</div>
        <div className="flex justify-between items-center p-[6px] bg-[#0f0f10] text-[10px] text-white rounded-md">
          <p>Current Week</p>
          <IoIosArrowDown className="ml-1" />
        </div>
      </div>
      <p className="text-[#494949] text-[14px] mt-3">
        Total 3,102 transaction this month
      </p>
      <TransactionTable />
      <Link
        href={"/admin/history"}
        className="text-[#8c945a] text-[14px] flex justify-end items-center mb-6 mt-3"
      >
        <p>View All Transactions</p>
        <FaArrowRight />
      </Link>
    </div>
  );
}
