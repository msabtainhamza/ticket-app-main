"use client";
import Image from "next/image";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { LuUserPlus2 } from "react-icons/lu";
import { PiMoney } from "react-icons/pi";
import { RiTicketLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import MoneySpend from "@/components/MoneySpend";
import RecentActivites from "@/components/RecentActivites";
import History from "@/components/History";

import { useRouter } from "next/navigation";

export default function Events() {
  const router = useRouter();
  const id = 1;

  return (
    <main className="min-h-screen w-full bg-[#0f0f10] md:p-9 p-5">
      <div className="">
        <p className="text-white md:text-[26px] text-[17px]">Profile</p>
      </div>
      <div className="w-full  mt-4 md:flex block justify-between items-center">
        <div className="md:w-[48%] w-full bg-[#1b1b1b] rounded-xl md:p-10 p-5">
          <p className="text-[12px] text-[#494949]">Customer Profile</p>
          <div className="flex justify-start items-end gap-3 md:mt-8 mt-3">
            <p className="text-white md:text-[29px] text-[17px] font-semibold">
              John Smith
            </p>
            <BiMessageRoundedDetail className="text-[#8c945a] md:text-[30px] text-[20px]" />
          </div>
          <p className="text-[12px] text-white md:mt-3 mt-1">
            emailaddress@gmail.com
          </p>
          <div className="md:w-[80%] w-full md:mt-11 mt-5">
            <div className="flex justify-between items-center md:mt-8 mt-0 w-full">
              <div className="flex justify-start items-center gap-3">
                <div className="bg-[#171617] md:p-3 p-1 rounded-[50%]">
                  <LuUserPlus2 className="text-[#8c945a] md:text-[30px] text-[22px]" />
                </div>
                <div>
                  <p className="md:text-[12px] text-[10px] text-[#494949]">
                    Registerd on
                  </p>
                  <p className="text-white md:text-[12px] text-[10px]">
                    Dec, 2023
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="bg-[#171617] md:p-3 p-1 rounded-[50%]">
                  <PiMoney className="text-[#8c945a] md:text-[30px] text-[22px]" />
                </div>
                <div>
                  <p className="md:text-[12px] text-[10px] text-[#494949]">
                    Money Spend
                  </p>
                  <p className="text-white md:text-[12px] text-[10px]">
                    $1,326.56
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-11 w-full">
              <div className="flex justify-start items-center gap-3">
                <div className="bg-[#171617] md:p-3 p-1 rounded-[50%]">
                  <RiTicketLine className="text-[#8c945a] md:text-[30px] text-[22px]" />
                </div>
                <div className="w-[50%]">
                  <p className="md:text-[12px] text-[10px] text-[#494949]">
                    Address
                  </p>
                  <p className="text-white md:text-[12px] text-[10px]">
                    Alt-Moabit 41, Neuburg, Freistaat Bayern
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="bg-[#171617] md:p-3 p-1 rounded-[50%]">
                  <SlLocationPin className="text-[#8c945a] md:text-[30px] text-[22px]" />
                </div>
                <div>
                  <p className="md:text-[12px] text-[10px] text-[#494949]">
                    Money Spend
                  </p>
                  <p className="text-white md:text-[12px] text-[10px]">
                    $1,326.56
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoneySpend />
      </div>
      <div className="w-full  mt-4 md:flex block justify-between items-center">
        <RecentActivites />
        <History navigartion={`/admin/buyers/${id}/history`} />
      </div>
    </main>
  );
}
