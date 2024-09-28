import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import TicketCard from "@/components/TicketCard";

export default function Buyer() {
  return (
    <main className="min-h-screen bg-[#0f0f10] md:p-8 p-3 w-full">
      <div className="flex justify-center items-center">
        <Image
          src={"/images/Logo.gif"}
          width={70}
          height={330}
          alt="Logo Image"
        />
      </div>
      <div className="md:w-[80%] w-[99%] mx-auto">
        <div className="w-full md:flex md:justify-between items-center mt-10 border-b-[2px] border-b-[#B86C5C]">
          <div className="flex justify-between items-center bg-[#1b1b1b] p-3 rounded-xl md:w-[85%] w-full">
            <input
              placeholder="Search Ticket"
              type="text"
              className="bg-[#1b1b1b] border-none w-full text-[#B3B3B3] text-[13px] outline-none font-semibold"
            />
            <FiSearch className="text-[#B3B3B3] font-semibold text-[22px]" />
          </div>
          <div className="flex justify-between items-center md:hidden mt-2">
            <div className="flex justify-center items-center bg-[#1b1b1b] p-3 rounded-xl w-[45px] h-[45px]">
              <div className="flex justify-center items-center bg-[#1b1b1b] w-full h-full">
                <Image
                  src={"/images/filter.png"}
                  width={17}
                  height={30}
                  alt="Filter Icon"
                />
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#1b1b1b] p-3 rounded-xl w-[45px] h-[45px]">
              <div className="flex justify-center items-center bg-[#1b1b1b] w-full h-full">
                <Image
                  src={"/images/list.png"}
                  width={17}
                  height={30}
                  alt="List Icon"
                />
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#1b1b1b] p-3 rounded-xl w-[45px] h-[45px]">
              <div className="flex justify-center items-center bg-[#1b1b1b] w-full h-full">
                <Image
                  src={"/images/date.png"}
                  width={17}
                  height={30}
                  alt="Date Icon"
                />
              </div>
            </div>
          </div>
          <div className="md:flex hidden justify-center items-center bg-[#1b1b1b] p-3 rounded-xl w-[45px] h-[45px]">
            <div className="flex justify-center items-center bg-[#1b1b1b] w-full h-full">
              <Image
                src={"/images/filter.png"}
                width={17}
                height={30}
                alt="Filter Icon"
              />
            </div>
          </div>
          <div className="md:flex hidden justify-center items-center bg-[#1b1b1b] p-3 rounded-xl w-[45px] h-[45px]">
            <div className="flex justify-center items-center bg-[#1b1b1b] w-full h-full">
              <Image
                src={"/images/list.png"}
                width={17}
                height={30}
                alt="List Icon"
              />
            </div>
          </div>
          <div className="md:flex hidden justify-center items-center bg-[#1b1b1b] p-3 rounded-xl w-[45px] h-[45px]">
            <div className="flex justify-center items-center bg-[#1b1b1b] w-full h-full">
              <Image
                src={"/images/date.png"}
                width={17}
                height={30}
                alt="Date Icon"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:flex md:flex-wrap md:justify-between items-center">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </main>
  );
}
