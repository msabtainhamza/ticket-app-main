import CircularProgressBar from "./CircularProgressBar";
import Image from "next/image";
import Link from "next/link";

export default function CashoutEvents() {
  return (
    <div className="bg-[#1b1b1b] md:w-[23%] w-full rounded-xl md:mt-0 mt-4 md:p-5 p-4">
      <p className="text-[15px] text-white font-semibold">
        Event Ready for Cashout
      </p>
      <div className="flex justify-between items-center border-b-[#0f0f10] border-b-[2px] py-2">
        <div className="flex justify-start items-center">
          <div className="">
            <Image
              src={"/images/user.png"}
              width={40}
              height={20}
              className="rounded-[50%]"
              alt="Icon"
            />
          </div>
          <div className="ml-2">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              JOE ELIA
            </p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
        <div>
          <CircularProgressBar />
        </div>
      </div>
      <div className="flex justify-between items-center border-b-[#0f0f10] border-b-[2px] py-2">
        <div className="flex justify-start items-center">
          <div className="">
            <Image
              src={"/images/user.png"}
              width={40}
              height={20}
              className="rounded-[50%]"
              alt="Icon"
            />
          </div>
          <div className="ml-2">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              JOE ELIA
            </p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
        <div>
          <CircularProgressBar />
        </div>
      </div>
      <div className="flex justify-between items-center border-b-[#0f0f10] border-b-[2px] py-2">
        <div className="flex justify-start items-center">
          <div className="">
            <Image
              src={"/images/user.png"}
              width={40}
              height={20}
              className="rounded-[50%]"
              alt="Icon"
            />
          </div>
          <div className="ml-2">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              JOE ELIA
            </p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
        <div>
          <CircularProgressBar />
        </div>
      </div>
      <div className="flex justify-between items-center border-b-[#0f0f10] border-b-[2px] py-2">
        <div className="flex justify-start items-center">
          <div className="">
            <Image
              src={"/images/user.png"}
              width={40}
              height={20}
              className="rounded-[50%]"
              alt="Icon"
            />
          </div>
          <div className="ml-2">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              JOE ELIA
            </p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
        <div>
          <CircularProgressBar />
        </div>
      </div>
      <div className="flex justify-between items-center border-b-[#0f0f10] border-b-[2px] py-2">
        <div className="flex justify-start items-center">
          <div className="">
            <Image
              src={"/images/user.png"}
              width={40}
              height={20}
              className="rounded-[50%]"
              alt="Icon"
            />
          </div>
          <div className="ml-2">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              JOE ELIA
            </p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
        <div>
          <CircularProgressBar />
        </div>
      </div>
      <div className="w-fit m-auto">
        <Link href={""} className="text-[#8c945a] text-[11px] underline">
          See all
        </Link>
      </div>
    </div>
  );
}
