import Image from "next/image";
import Link from "next/link";

export default function TicketCard() {
  return (
    <div className="bg-[#1b1b1b] rounded-xl md:w-[31%] w-full md:h-auto h-auto min-h-fit p-2 mt-5 flex flex-col justify-between">
      <div className="w-full max-w-full mx-auto">
        <Image
          src={"/images/ticket.png"}
          width={300}
          height={190}
          className="rounded-xl w-full"
          alt="Icon"
        />
      </div>

      <div className="flex justify-between items-center mt-1">
        <div>
          <p className="text-white text-[23px] font-bold">
            D` BROWN CAPITALISM
          </p>
          <p className="text-[#B3B3B3] text-[12px]">By Black Mamba</p>
        </div>
        <div className="flex justify-between items-center">
          <Image src={"/images/time.png"} width={14} height={10} alt="Icon" />
          <p className="text-[#7A844A] text-[14px] ml-1">10:00 PM</p>
        </div>
      </div>

      <div className="flex justify-between items-end mt-1">
        <div>
          <div className="flex justify-between items-center">
            <Image src={"/images/address.png"} width={14} height={14} alt="Icon" />
            <p className="text-white text-[10px] ml-1">
              Alt-Moabit 41, Neuburg, Freistaat Bayern
            </p>
          </div>
          <div className="flex justify-between items-center md:w-[43%] w-[51%] mt-[5px]">
            <Image src={"/images/date.png"} width={14} height={14} alt="Icon" />
            <p className="text-white text-[10px] ">16 APRIL, 2024</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white text-[14px]">$</p>
          <p className="text-white text-[29px] font-bold ml-2">36.99</p>
        </div>
      </div>

      <Link
        href={"/buyer/ticket"}
        className="text-center flex justify-center items-center w-full bg-[#8c945a] font-semibold rounded-xl p-3 mt-4"
      >
        Tickets
        <span>
          <Image
            src={"/images/rarrow.png"}
            width={15}
            height={10}
            className="ml-2"
            alt="Icon"
          />
        </span>
      </Link>
    </div>
  );
}
