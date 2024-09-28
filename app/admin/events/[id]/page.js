"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { RiEditLine } from "react-icons/ri";
import { LuUserCircle2 } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import {
  MdOutlineDateRange,
  MdOutlineAccessTime,
  MdAirplaneTicket,
} from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import { ImLocation2 } from "react-icons/im";
import TicketIncome from "@/components/TicketIncome";
import TicketStats from "@/components/TicketStats";
import EventBuyers from "@/components/EventBuyers";

export default function Page() {
  const { id } = useParams();

  return (
    <div className="min-h-screen w-full bg-[#0f0f10] py-9 px-[70px]">
      <div className="">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Image" />
      </div>
      <div className="w-full bg-[#1b1b1b] mt-5 rounded-xl p-8">
        <p className="text-white text-[22px] font-bold">Event View</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={500}
              height={300}
              className="rounded-xl"
              alt="Icon"
            />
          </div>
          <div className="w-[55%]">
            <p className="text-white text-[29px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <div className="flex justify-start items-center gap-3 mt-3">
              <div className="text-[#0f0f10] bg-[#8c945a] py-3 px-5 font-semibold text-[13px] rounded-md">
                . ONLINE
              </div>
              <div className="text-[#0f0f10] bg-[#8c945a] p-3  text-[13px] font-bold rounded-md">
                <RiEditLine className="text-[19px]" />
              </div>
            </div>
            <p className="text-white text-[20px] font-semibold mt-3">
              Event Description
            </p>
            <p className="text-[#494949] text-[13px] mt-2 text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&aposs standard dummy
              text ever since the 1500s, Lorem Ipsum has been the industry&aposs
              standard dummy text ever since the 1500s,
            </p>
            <div>
              <div className="flex justify-start items-center gap-9 mt-2">
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <LuUserCircle2 className="text-[40px] text-[#494949]" />
                  </div>
                  <div>
                    <p className="text-[#494949] text-[13px]">
                      Event Hosted By
                    </p>
                    <div className="flex justify-start items-center gap-2">
                      <p className="text-white text-[16px]">David Carl</p>
                      <GoArrowUpRight className="text-[#8c945a] text-[15px]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <MdOutlineDateRange className="text-[40px] text-[#494949]" />
                  </div>
                  <div>
                    <p className="text-[#494949] text-[13px]">Event Date</p>
                    <p className="text-white text-[16px]">16 APRIL, 2024</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-[50px] mt-2">
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <RxLapTimer className="text-[40px] text-[#494949]" />
                  </div>
                  <div>
                    <p className="text-[#494949] text-[13px]">Event Duration</p>
                    <p className="text-white text-[16px]">2hr</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <MdOutlineAccessTime className="text-[40px] text-[#494949]" />
                  </div>
                  <div>
                    <p className="text-[#494949] text-[13px]">Event Time</p>
                    <p className="text-white text-[16px]">10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-[64px] mt-2">
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <MdAirplaneTicket className="text-[40px] text-[#494949]" />
                  </div>
                  <div>
                    <p className="text-[#494949] text-[13px]">Total Tickets</p>
                    <p className="text-white text-[16px]">15,411</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <ImLocation2 className="text-[30px] text-[#494949]" />
                  </div>
                  <div>
                    <p className="text-[#494949] text-[13px]">Event Location</p>
                    <p className="text-white text-[16px]">
                      Alt-Moabit 41, Neuburg, Freistaat Bayern
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 flex justify-between items-center">
        <TicketIncome />
        <TicketStats />
        <EventBuyers />
      </div>
    </div>
  );
}
