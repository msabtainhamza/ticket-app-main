"use client";
import Image from "next/image";
import { historyList } from "@/constants/historyList";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import { FaFilePdf } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { downloadPDF } from "@/utils/historyPdf";

export default function Events() {
  const router = useRouter();
  const [history, setEvents] = useState(historyList.slice(0, 10));
  const [activeTab, setActiveTab] = useState("All");

  const loadMore = () => {
    console.log("Load More");
    const length = history.length;
    const newHistory = historyList.slice(0, length + 10);
    setEvents(newHistory);
  };

  const handleIdClick = (id) => {
    router.push(`/admin/buyers/${id}/history`);
  };
  const handleProfileClick = (id) => {
    router.push(`/admin/buyers/${id}`);
  };

  return (
    <main className="min-h-screen w-full bg-[#0f0f10] md:p-9 p-4">
      <div className="flex md:justify-start justify-center items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Icon" />
      </div>
      <div className="w-full bg-[#2e2e2e] mt-4 md:p-3 p-2 rounded-xl">
        <div className="flex md:justify-start justify-between items-center gap-3">
          <p className="text-white md:text-[22px] text-[15px] font-bold">
            History
          </p>
          <p className="text-white md:text-[13px] text-[11px]">
            Total Transactions - {historyList.length}
          </p>
        </div>
        <div className="md:flex block justify-between items-center  mt-4">
          <div className="flex justify-start items-center gap-5 py-1">
            <div
              className={`${
                activeTab === "All" ? "bg-[#8c945a]" : "bg-[#292929]"
              } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
              onClick={() => setActiveTab("All")}
            >
              All
            </div>
            <div
              className={`${
                activeTab === "Events" ? "bg-[#8c945a]" : "bg-[#292929]"
              } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
              onClick={() => setActiveTab("Events")}
            >
              Events
            </div>
            <div
              className={`${
                activeTab === "Tickets" ? "bg-[#8c945a]" : "bg-[#292929]"
              } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
              onClick={() => setActiveTab("Tickets")}
            >
              Tickets
            </div>
            <div
              className={`${
                activeTab === "Transact" ? "bg-[#8c945a]" : "bg-[#292929]"
              } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
              onClick={() => setActiveTab("Transact")}
            >
              Transcations
            </div>
          </div>
          <div
            className="text-white p-2 rounded-md text-[12px] font-semibold hover:cursor-pointer bg-[#292929] flex md:justify-between justify-center gap-1 items-center"
            onClick={downloadPDF}
          >
            <FaFilePdf className="text-white mr-1" />
            Download
          </div>
        </div>

        <div className="overflow-x-auto bg-[#151515] p-5 rounded-xl mt-3 no-scrollbar">
          <table
            className="min-w-full divide-y divide-[#494949] bg-[#151515]"
            id="table-to-pdf"
          >
            <thead className="text-[#494949] font-medium">
              <tr>
                <th className=" py-2 text-left text-xs  tracking-wider">
                  ID #
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Name
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Email Address
                </th>
                <th className=" px-6 py-2 text-left text-xs  tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Event Name
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Event Status
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Address
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Event Date/Time
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Status
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Ticket Type
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Price
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  QTY
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="">
              {history.map((hist) => (
                <tr key={hist.id} className="text-white font-normal">
                  <td className="py-2 whitespace-nowrap text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div
                      className="flex justify-start items-center"
                      onClick={() => handleIdClick(hist.id)}
                    >
                      <div># {hist.id}</div>
                      <div>
                        <GoArrowUpRight className="text-[#8c945a] ml-[2px]" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div
                      className="flex justify-start items-center"
                      onClick={() => handleProfileClick(hist.id)}
                    >
                      <div>{hist.name}</div>
                      <div>
                        <GoArrowUpRight className="text-[#8c945a] ml-[2px]" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {hist.email}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div>
                      <p>{hist.date}</p>
                      <p>{hist.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-sm hover:text-[#8c945a] cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <Image
                        src={"/images/ticket.png"}
                        width={32}
                        height={25}
                        className="rounded-md"
                      />
                      <div>
                        <p className="text-[10px] uppercase">
                          {hist.eventName}
                        </p>
                        <p className=" text-[10px] uppercase">By {hist.by}</p>
                      </div>
                    </div>
                  </td>
                  <td
                    className={`px-6 py-2 whitespace-nowrap text-left text-[10px] cursor-pointer  ${
                      hist.eventStatus === "ONLINE"
                        ? "text-[#83EC52]"
                        : hist.eventStatus === "OFFLINE"
                        ? "text-[#FFA723]"
                        : hist.eventStatus === "CANCEL"
                        ? "text-[#E35252]"
                        : "text-white hover:text-[#8c945a]" // default color if none of the conditions match
                    }`}
                  >
                    {hist.eventStatus}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {hist.location}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div>
                      <p>{hist.date}</p>
                      <p>{hist.time}</p>
                    </div>
                  </td>
                  <td
                    className={`px-6 py-2 whitespace-nowrap text-left text-[10px] cursor-pointer  ${
                      hist.status === "Pending"
                        ? "text-[#DBD496]"
                        : hist.status === "Paid"
                        ? "text-[#8C945A]"
                        : hist.status === "Cancel"
                        ? "text-[#E35252]"
                        : hist.status === "Refund"
                        ? "text-[#FFA723]"
                        : "text-white hover:text-[#8c945a]" // default color if none of the conditions match
                    }`}
                  >
                    <div className="flex justify-start items-center">
                      {hist.status === "Pending" ? (
                        <HiMiniCheckCircle className="text-[#DBD496] text-[14px] mr-1" />
                      ) : hist.status === "Paid" ? (
                        <HiMiniCheckCircle className="text-[#8C945A] text-[14px] mr-1" />
                      ) : hist.status === "Cancel" ? (
                        <IoCloseCircle className="text-[#E35252] text-[14px] mr-1" />
                      ) : hist.status === "Refund" ? (
                        <HiMiniCheckCircle className="text-[#FFA723] text-[14px] mr-1" />
                      ) : (
                        <HiMiniCheckCircle className="text-gray-500 text-[12px] hidden" />
                      )}
                      {hist.status}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-2 hover:text-[#8c945a] cursor-pointer whitespace-nowrap uppercase text-left text-[10px] ${
                      hist.ticketType === "VIP"
                        ? "text-[#83EC52]" // Apply red color for VIP tickets
                        : hist.ticketType === "WEEKENDER"
                        ? "text-[#FE5EA1]" // Apply green color for Regular tickets
                        : "text-[#DBD496]" // Apply blue color for other ticket types
                    }`}
                  >
                    {hist.ticketType}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {hist.price}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {hist.transactionId}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    #{hist.ticketId}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {hist.qty}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {hist.payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {historyList.length > 10 && (
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
