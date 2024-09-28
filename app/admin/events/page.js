"use client";
import Image from "next/image";
import { TfiMoreAlt } from "react-icons/tfi";
import { eventsList } from "@/constants/events";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSolidErrorCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";

export default function Events() {
  const router = useRouter();
  const [events, setEvents] = useState(
    eventsList.filter((event) => event.status === "Online").slice(0, 10)
  );
  const [activeTab, setActiveTab] = useState("Online");
  const [showAction, setShowAction] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cancelId, setCancelId] = useState(null);

  const loadMore = () => {
    console.log("Load More");
    const length = events.length;
    const newEvents = eventsList
      .filter((event) => event.status === activeTab)
      .slice(0, length + 10);
    setEvents(newEvents);
  };
  const filterEvents = (type) => {
    setActiveTab(type);
    const filteredEvents = eventsList.filter((event) => event.status === type);
    setEvents(filteredEvents.slice(0, 10));
  };

  const handleViewClick = (id) => {
    router.push(`/admin/events/${id}`);
  };
  const handleCancelClick = (id) => {
    setShowAction(false);
    setCancelId(id);
    setShowModal(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#0f0f10] p-9">
      <div className="flex md:justify-start justify-center items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Image" />
      </div>
      <div className="w-full bg-[#2e2e2e] mt-4 p-3 rounded-xl">
        <div className="flex md:justify-start justify-between items-center gap-3">
          <p className="text-white md:text-[22px] text-[15px] font-bold">
            Online Events
          </p>
          <p className="text-white md:text-[13px] text-[9px]">
            Total Online Events - {eventsList.length}
          </p>
        </div>
        <div className="flex md:justify-start justify-between items-center md:gap-5 gap-auto mt-4 border-b border-b-[#b86c5c] py-1">
          <div
            className={`${
              activeTab === "Online" ? "bg-[#8c945a]" : "bg-[#292929]"
            } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
            onClick={() => filterEvents("Online")}
          >
            Online Events
          </div>
          <div
            className={`${
              activeTab === "Upcoming" ? "bg-[#8c945a]" : "bg-[#292929]"
            } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
            onClick={() => filterEvents("Upcoming")}
          >
            Upcoming Events
          </div>
          <div
            className={`${
              activeTab === "Cancel" ? "bg-[#8c945a]" : "bg-[#292929]"
            } text-white md:p-2 p-1 md:rounded-xl rounded-md md:text-[12px] text-[10px] font-semibold hover:cursor-pointer`}
            onClick={() => filterEvents("Cancel")}
          >
            Pasts Events
          </div>
        </div>
        <div className="overflow-x-auto bg-[#151515] p-5 rounded-xl mt-5 no-scrollbar">
          <table className="min-w-full divide-y divide-[#494949] bg-[#151515]">
            <thead className="text-[#494949] font-medium">
              <tr>
                <th className=" py-2 text-left text-xs  tracking-wider">
                  Status
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Event Name
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Location
                </th>
                <th className=" px-6 py-2 text-left text-xs  tracking-wider">
                  Date/Time
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Ticket Sale
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Price
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Type
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Reviews
                </th>
                <th className="px-6 py-2 text-left text-xs font-medium tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {events.map((event) => (
                <tr key={event.id} className="text-white font-normal">
                  <td className="py-2 whitespace-nowrap text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.status}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <Image
                        src={"/images/ticket.png"}
                        width={32}
                        height={25}
                        className="rounded-md"
                        alt="Image"
                      />
                      <div>
                        <p className="text-[10px] uppercase">{event.name}</p>
                        <p className=" text-[10px] uppercase">{event.by}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.location}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    <div>
                      <p>{event.date}</p>
                      <p>{event.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.sale}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.capacity}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.price}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.type}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left  text-[10px] hover:text-[#8c945a] cursor-pointer">
                    {event.reviews}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-left text-[19px] font-bold hover:text-[#8c945a] relative">
                    <TfiMoreAlt onClick={() => setShowAction(event.id)} />
                    {showAction === event.id && (
                      <div className="bg-[#292929] w-[170px] h-[80px] p-2 rounded-xl absolute top-0 right-0">
                        <div
                          className="hover:bg-[#151515] text-[#494949] text-[12px] p-[6px] w-[100%] rounded-md hover:cursor-pointer"
                          onClick={() => handleViewClick(event.id)}
                        >
                          View
                        </div>
                        <div
                          className="hover:bg-[#151515] text-[#E35252] text-[12px] p-[6px] rounded-md hover:cursor-pointer"
                          onClick={() => handleCancelClick(event.id)}
                        >
                          Cancel
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {eventsList.filter((events) => events.status === activeTab).length >
            10 && (
            <div
              className="text-center text-[13px] text-[#8c945a] underline mt-1 hover:cursor-pointer"
              onClick={loadMore}
            >
              Load More
            </div>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-[#1b1b1b] rounded-xl relative p-7 w-[350px] flex justify-center items-center flex-col">
            <BiSolidErrorCircle className="text-[#E35252] text-center text-[40px]" />
            <p className="text-white text-[20px] font-bold mt-2">
              Are you sure?
            </p>
            <p className="text-[#494949] text-[14px] mt-2">
              You want to cancel this event?
            </p>

            <div className="mt-6 w-[60%] m-auto">
              <button
                className="bg-[#E35252] text-white p-2 rounded-md mt-2 w-full "
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
            <VscError
              className="absolute top-2 right-2 text-[22px] text-[#494949] hover:cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </main>
  );
}
