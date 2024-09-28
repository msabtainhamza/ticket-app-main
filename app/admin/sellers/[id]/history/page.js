"use client";
import Image from "next/image";
import { userTransactions } from "@/constants/userTransactions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Events() {
  const router = useRouter();
  const [transactions, setTransactions] = useState(
    userTransactions.slice(0, 10)
  );
  const [activeTab, setActiveTab] = useState("Weekly");

  const loadMore = () => {
    console.log("Load More");
    const length = transactions.length;
    const newTransactions = userTransactions.slice(0, length + 10);
    setTransactions(newTransactions);
  };

  return (
    <main className="min-h-screen w-full bg-[#0f0f10] md:p-9 p-4">
      <div className="flex md:justify-start justify-center items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Image" />
      </div>
      <div className="w-full bg-[#2e2e2e] mt-4 p-3 rounded-xl">
        <div className="flex justify-start items-center gap-3">
          <p className="text-white md:text-[22px] text-[15px] font-bold">
            History
          </p>
        </div>
        <div className="flex justify-start items-center gap-5 md:mt-4 mt-1 border-b border-b-[#b86c5c] py-1">
          <div
            className={`${
              activeTab === "Weekly" ? "bg-[#8c945a]" : "bg-[#292929]"
            } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
            onClick={() => setActiveTab("Weekly")}
          >
            Weekly
          </div>
          <div
            className={`${
              activeTab === "Monthly" ? "bg-[#8c945a]" : "bg-[#292929]"
            } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
            onClick={() => setActiveTab("Monthly")}
          >
            Monthly
          </div>
          <div
            className={`${
              activeTab === "Yearly" ? "bg-[#8c945a]" : "bg-[#292929]"
            } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
            onClick={() => setActiveTab("Yearly")}
          >
            Yearly
          </div>
        </div>
        <div className="overflow-x-auto bg-[#151515] p-5 rounded-xl mt-5 no-scrollbar">
          <table className="min-w-full divide-y divide-[#494949] bg-[#151515]">
            <thead className="text-[#494949] font-medium">
              <tr>
                <th className=" py-2 text-left text-xs  tracking-wider">
                  ID #
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Name
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Type
                </th>
                <th className=" px-6 py-2 text-left text-xs  tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Invoice ID
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Method
                </th>
              </tr>
            </thead>
            <tbody className="">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="text-white font-normal">
                  <td className="py-2 whitespace-nowrap text-[10px] hover:text-[#8c945a] cursor-pointer">
                    #{transaction.id}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-sm hover:text-[#8c945a] cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <Image
                        src={"/images/ticket.png"}
                        width={32}
                        height={25}
                        className="rounded-md"
                        alt="Icon"
                      />
                      <div>
                        <p className="text-[10px] uppercase">
                          {transaction.eventName}
                        </p>
                        <p className=" text-[10px] uppercase">
                          By {transaction.by}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div>
                      <p>{transaction.date}</p>
                      <p>{transaction.time}</p>
                    </div>
                  </td>

                  <td
                    className={`px-6 py-2 whitespace-nowrap text-left text-[10px] cursor-pointer ${
                      transaction.type == "Ticket Buy"
                        ? "text-[#83EC52]" // Change to green if price is less than 50
                        : transaction.type == "Refund"
                        ? "text-[#E35252]" // Change to red if price is greater than 100
                        : "text-white hover:text-[#hover:text-[#8c945a]]" // Change to yellow otherwise
                    }`}
                  >
                    {transaction.price}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {transaction.invoiceId}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {transaction.payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {userTransactions.length > 10 && (
            <div
              className="text-center text-[13px] text-[#8c945a] underline mt-1 hover:cursor-pointer"
              onClick={loadMore}
            >
              Load More
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
