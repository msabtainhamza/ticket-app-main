import CircularProgressBar from "./CircularProgressBar";
export default function TicketStats() {
  return (
    <div className="w-[20%] bg-[#1b1b1b] p-6 rounded-xl">
      <p className="text-white text-[20px] font-bold">Ticket Info</p>
      <div className="flex justify-between items-center mt-6">
        <div className="bg-[#292929] flex flex-col p-3 justify-center items-center rounded-xl w-[47%]">
          <CircularProgressBar />
          <p className="text-[#494949] text-[12px] mt-2">Tickets Sold</p>
          <p className="text-white text-[11px] mt-2">56,12</p>
        </div>
        <div className="bg-[#292929] flex flex-col p-3 justify-center items-center rounded-xl w-[47%]">
          <CircularProgressBar />
          <p className="text-[#494949] text-[12px] mt-2">Tickets Sold</p>
          <p className="text-white text-[11px] mt-2">56,12</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="bg-[#292929] flex flex-col p-3 justify-center items-center rounded-xl w-[47%]">
          <CircularProgressBar />
          <p className="text-[#494949] text-[12px] mt-2">Tickets Sold</p>
          <p className="text-white text-[11px] mt-2">56,12</p>
        </div>
        <div className="bg-[#292929] flex flex-col p-3 justify-center items-center rounded-xl w-[47%]">
          <CircularProgressBar />
          <p className="text-[#494949] text-[12px] mt-2">Tickets Sold</p>
          <p className="text-white text-[11px] mt-2">56,12</p>
        </div>
      </div>
    </div>
  );
}
