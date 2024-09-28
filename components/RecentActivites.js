import Image from "next/image";

export default function RecentActivites() {
  return (
    <div className="bg-[#1b1b1b] md:w-[48%] w-full rounded-xl p-4">
      <div className="flex justify-start items-center">
        <div className="md:text-[22px] text-[17px] text-white font-semibold">
          Recent Activites
        </div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl md:block hidden"
              alt="Icon"
            />
          </div>
          <div className="md:ml-4 ml-0">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[10px]">Buy Ticket</div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl md:block hidden"
              alt="Icon"
            />
          </div>
          <div className="md:ml-4 ml-0">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[10px]">
          Ask For Refund
        </div>
      </div>
      <div className="border-b-[2px] border-b-[#0f0f10] flex justify-between items-center p-1">
        <div className="flex justify-start items-center py-2">
          <div>
            <Image
              src={"/images/ticket.png"}
              width={60}
              height={30}
              className="rounded-xl md:block hidden"
              alt="Icon"
            />
          </div>
          <div className="md:ml-4 ml-0">
            <p className="text-white md:text-[15px] text-[12px] font-bold">
              D` BROWN CAPITALISM
            </p>
            <p className="text-[#494949] text-[10px]">
              BY BLACK MAMBA{" "}
              <span className="text-[#8c945a] ml-2"> . ONLINE</span>
            </p>
          </div>
        </div>
        <div className="text-white md:text-[12px] text-[10px]">Buy Ticket</div>
      </div>
      <div className="text-end text-[#8c945a] mt-3 md:text-[13px] text-[11px]">
        View All History
      </div>
    </div>
  );
}
