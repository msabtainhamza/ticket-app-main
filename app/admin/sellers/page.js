"use client";
import Image from "next/image";
import { sellersList } from "@/constants/sellerList";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";

export default function Buyers() {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/admin/sellers/${id}`);
  };
  const [sellers, setSellers] = useState(sellersList.slice(0, 10));
  const loadMore = () => {
    const length = sellers.length;
    const newSellers = sellersList.slice(0, length + 10);
    setSellers(newSellers);
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
                <th className=" px-6 py-2 text-left text-xs  tracking-wider">
                  Event Date/Time
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Type
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
              {sellers.map((seller) => (
                <tr key={seller.id} className="text-white font-normal">
                  <td className="py-2 whitespace-nowrap text-[10px]">
                    <div
                      onClick={() => handleClick(seller.id)}
                      className="flex justify-start items-center hover:cursor-pointer hover:text-[#8c945a]"
                    >
                      {seller.name}
                      <GoArrowUpRight className="text-[#8c945a] text-[10px] ml-1" />
                    </div>
                  </td>
                  <td className="py-2 whitespace-nowrap text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {seller.email}
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
                          {seller.eventName}
                        </p>
                        <p className=" text-[10px] uppercase">By {seller.by}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div>{seller.date}</div>
                    <div>{seller.time}</div>
                  </td>

                  <td
                    className={`px-6 py-2 hover:text-[#8c945a] cursor-pointer whitespace-nowrap uppercase text-left text-[10px] ${
                      seller.ticketType === "VIP"
                        ? "text-[#83EC52]" // Apply red color for VIP tickets
                        : seller.ticketType === "WEEKENDER"
                        ? "text-[#FE5EA1]" // Apply green color for Regular tickets
                        : "text-[#DBD496]" // Apply blue color for other ticket types
                    }`}
                  >
                    {seller.ticketType}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {seller.price}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {seller.transactionId}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {seller.ticketId}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {seller.qty}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {seller.payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {sellersList.length > 10 && (
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
