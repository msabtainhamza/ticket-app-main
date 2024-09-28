import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function AdminStats() {
  return (
    <div className="bg-[#1b1b1b] md:w-[23%] w-full md:mt-0 mt-4 rounded-xl p-4">
      <div className="bg-[#8c945a] md:p-[22px] p-[10px] flex justify-between items-start rounded-t-xl">
        <div className="flex justify-start items-center">
          <div className="bg-[#171617] md:block hidden  rounded-3xl md:p-2 p-1 mr-2">
            <Image src={"/images/event.png"} width={30} height={20} alt="Icon" />
          </div>
          <div>
            <p className="text-[#171617] md:text-[22px] text-[17px] font-bold">
              74,089
            </p>
            <p className="text-[#171617] text-[10px]">Online Events</p>
          </div>
        </div>
        <Link href={"/admin/events"}>
          <Image src={"/images/redirect.png"} width={20} height={10} alt="Icon" />
        </Link>
      </div>
      <div className="bg-[#ffffff] md:p-[22px] p-[10px] flex justify-between items-start rounded-t-xl mt-[-8px]">
        <div className="flex justify-start items-center">
          <div className="bg-[#171617] md:block hidden rounded-3xl md:p-2 p-1 mr-2">
            <Image src={"/images/event.png"} width={30} height={20} alt="Icon" />
          </div>
          <div>
            <p className="text-[#171617] md:text-[22px] text-[17px] font-bold">
              1,156
            </p>
            <p className="text-[#171617] text-[10px]">Total Ticket Sellers</p>
          </div>
        </div>
        <Link href={"/admin/sellers"}>
          <Image src={"/images/redirect.png"} width={20} height={10} alt="Icon" />
        </Link>
      </div>
      <div className="bg-[#e7e7e7] md:p-[22px] p-[10px] flex justify-between items-start rounded-t-xl mt-[-8px]">
        <div className="flex justify-start items-center">
          <div className="bg-[#171617] md:block hidden rounded-3xl md:p-2 p-1 mr-2">
            <Image src={"/images/event.png"} width={30} height={20} alt="Icon" />
          </div>
          <div>
            <p className="text-[#171617] md:text-[22px] text-[17px] font-bold">
              5,312
            </p>
            <p className="text-[#171617] text-[10px]">Total Ticket Buyers</p>
          </div>
        </div>
        <Link href={"/admin/buyers"}>
          <Image src={"/images/redirect.png"} width={20} height={10} alt="Icon" />
        </Link>
      </div>
      <div className="bg-[#b3b3b3] md:p-[22px] p-[10px] flex justify-between items-start rounded-t-xl mt-[-8px]">
        <div className="flex justify-start items-center">
          <div className="bg-[#171617] md:block hidden rounded-3xl md:p-2 p-1 mr-2">
            <Image src={"/images/newuser.png"} width={30} height={20} alt="Icon" />
          </div>
          <div>
            <p className="text-[#171617] md:text-[22px] text-[17px] font-bold">
              312
            </p>
            <p className="text-[#171617] text-[10px]">
              Newly Register Profiles
            </p>
          </div>
        </div>
        <div className="p-1 flex justify-between items-center border border-[#171617] rounded-md">
          <p className="text-[#171617] text-[11px]">Week</p>
          <IoIosArrowDown className="text-[#171617] text-[11px]" />
        </div>
      </div>
    </div>
  );
}
