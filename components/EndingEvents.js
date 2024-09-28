import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function EndingEvents() {
  return (
    <div className="bg-[#1b1b1b] md:w-[50%] w-full rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div className="md:text-[22px] text-[17px] text-white font-semibold">
          Ending Events
        </div>
        <div className="flex justify-between items-center p-[6px] bg-[#0f0f10] text-[10px] text-white rounded-md">
          <p>Current Week</p>
          <IoIosArrowDown className="ml-1" />
        </div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl"
              alt="Icon"
            />
          </div>
          <div className="ml-4">
            <p className="text-white md:text-[15px] text-[11px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[9px]">APR 2023</div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl"
              alt="Icon"
            />
          </div>
          <div className="ml-4">
            <p className="text-white md:text-[15px] text-[11px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[9px]">APR 2023</div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl"
              alt="Icon"
            />
          </div>
          <div className="ml-4">
            <p className="text-white md:text-[15px] text-[11px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[9px]">APR 2023</div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl"
              alt="Icon"
            />
          </div>
          <div className="ml-4">
            <p className="text-white md:text-[15px] text-[11px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[9px]">APR 2023</div>
      </div>
    </div>
  );
}
