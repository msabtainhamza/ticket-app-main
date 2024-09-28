import Image from "next/image";
import Link from "next/link";

export default function EventBuyers() {
  return (
    <div className="bg-[#1b1b1b] w-[23%] rounded-xl p-6">
      <p className="text-[15px] text-white font-semibold">Recent Buyers</p>

      <div className="flex justify-start items-center border-b-[#0f0f10] border-b-[2px] py-2 mt-2">
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
            <p className="text-white text-[15px] font-bold">JOE ELIA</p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center border-b-[#0f0f10] border-b-[2px] py-2 mt-2">
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
            <p className="text-white text-[15px] font-bold">JOE ELIA</p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center border-b-[#0f0f10] border-b-[2px] py-2 mt-2">
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
            <p className="text-white text-[15px] font-bold">JOE ELIA</p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center border-b-[#0f0f10] border-b-[2px] py-2 mt-2">
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
            <p className="text-white text-[15px] font-bold">JOE ELIA</p>
            <p className="text-[#494949] text-[10px]">Lorem Ipsum</p>
          </div>
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
