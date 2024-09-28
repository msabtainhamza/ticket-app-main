"use client";
import Image from "next/image";
import { buyersList } from "@/constants/buyersList";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";

export default function Buyers() {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/admin/buyers/${id}`);
  };
  const [buyers, setBuyers] = useState(buyersList.slice(0, 10));
  const loadMore = () => {
    const length = buyers.length;
    const newBuyers = buyersList.slice(0, length + 10);
    setBuyers(newBuyers);
  };
  return (
    <div className="min-h-screen w-full bg-[#0f0f10] md:py-6 py-2 md:px-[30px] px-3">
      <div className="flex md:justify-start justify-center items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Image" />
      </div>
      <div className="w-full bg-[#1b1b1b] mt-5 rounded-xl md:p-4 p-1">
        <div className="overflow-x-auto bg-[#151515] p-5 rounded-xl md:mt-5 mt-2 no-scrollbar">
          <table className="min-w-full divide-y divide-dashed divide-[#494949] bg-[#151515]">
            <thead className="text-[#8c945a] font-medium">
              <tr>
                <th className=" py-2 text-left text-xs  tracking-wider">
                  Name
                </th>
                <th className=" py-2 text-left text-xs  tracking-wider">
                  Buyer Email
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Event Name
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Address
                </th>
                <th className=" px-6 py-2 text-left text-xs  tracking-wider">
                  Date
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Ticket Type
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Price
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="">
              {buyers.map((buyer) => (
                <tr key={buyer.id} className="text-white font-normal">
                  <td className="py-2 whitespace-nowrap text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div
                      onClick={() => handleClick(buyer.id)}
                      className="flex justify-start items-center hover:cursor-pointer hover:text-[#8c945a]"
                    >
                      {buyer.name}
                      <GoArrowUpRight className="text-[#8c945a] text-[10px] ml-1" />
                    </div>
                  </td>
                  <td className="py-2 whitespace-nowrap text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {buyer.email}
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
                          {buyer.eventName}
                        </p>
                        <p className=" text-[10px] uppercase">By {buyer.by}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {buyer.location}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {buyer.date}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {buyer.ticketId}
                  </td>
                  <td
                    className={`px-6 py-2 hover:text-[#8c945a] cursor-pointer whitespace-nowrap uppercase text-left text-[10px] ${
                      buyer.ticketType === "VIP"
                        ? "text-[#83EC52]" // Apply red color for VIP tickets
                        : buyer.ticketType === "WEEKENDER"
                        ? "text-[#FE5EA1]" // Apply green color for Regular tickets
                        : "text-[#DBD496]" // Apply blue color for other ticket types
                    }`}
                  >
                    {buyer.ticketType}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {buyer.price}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {buyer.payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {buyersList.length > 10 && (
            <div
              className="text-center text-[13px] text-[#8c945a] underline mt-1 hover:cursor-pointer"
              onClick={loadMore}
            >
              Load More
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
