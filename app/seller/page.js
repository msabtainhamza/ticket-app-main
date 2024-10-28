"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import QRCodeComponent from "@/components/QrCode";
import SellerGraph from "@/components/SellerGraph";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { VscError } from "react-icons/vsc";

const Ticket = ({ handleTicketShow }) => {
  return (
    <div className="md:flex block justify-between items-center mt-4 py-2 border-b border-b-[#0f0f10]">
      <div className="md:flex md:justify-center items-center">
        <div className="ml-4 md:w-auto w-full">
          <div className="flex justify-start items-center">
            <Image
              src={"/images/date.png"}
              width={13}
              height={10}
              alt="Logo Image"
            />
            <p className="text-[#B3B3B3] text-[11px] ml-1">16 April, 2024</p>
          </div>
          <p className="text-white text-[15px] mt-1">D` BROWN CAPITALISM</p>
        </div>
      </div>
      <div
        className="bg-[#7a844a] py-2 px-4 text-[#1b1b1b] text-[19px] md:mt-0 mt-2 rounded-md gap-2 font-semibold cursor-pointer"
        onClick={() => handleTicketShow()}
      >
        <BsQrCodeScan />
      </div>
    </div>
  );
};

const EventSaved = ({ setShowEventSaved, setShowTicket }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#1b1b1b] rounded-xl relative md:p-4 p-1 w-[300px] flex justify-center items-center flex-col">
        <p className="text-white font-semibold text-[12px] mt-2">
          Event Saved! Do you want to add a ticket?
        </p>
        <div className="flex justify-between items-center gap-3">
          <button
            className="bg-[#7A844A] text-[#0F0F10] py-2 px-4 rounded-[9px] mt-4 text-[13px] font-bold"
            onClick={() => setShowEventSaved(false)}
          >
            No
          </button>
          <button
            className="bg-[#7A844A] text-[#0F0F10] py-2 px-4 rounded-[9px] mt-4 text-[13px] font-bold"
            onClick={() => {
              setShowEventSaved(false);
              setShowTicket(true);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
const TicketSaved = ({ setShowTicketSaved, setShowTicket }) => {
  return (
    <div className="fixed inset-0 bg-block bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#1b1b1b] rounded-xl relative md:p-4 p-1 w-[300px] flex justify-center items-center flex-col">
        <p className="text-white font-semibold text-[12px] mt-2">
          Ticket Saved! Do you want to add more tickets?
        </p>
        <div className="flex justify-between items-center gap-3">
          <button
            className="bg-[#7A844A] text-[#0F0F10] py-2 px-4 rounded-[9px] mt-4 text-[13px] font-bold"
            onClick={() => setShowTicketSaved(false)}
          >
            No
          </button>
          <button
            className="bg-[#7A844A] text-[#0F0F10] py-2 px-4 rounded-[9px] mt-4 text-[13px] font-bold"
            onClick={() => {
              setShowTicketSaved(false);
              setShowTicket(true);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Seller() {
  const [showEvent, setShowEvent] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showTicketDetails, setShowTicketDetails] = useState(false);
  const [showTicketSaved, setShowTicketSaved] = useState(false);
  const [showEventSaved, setShowEventSaved] = useState(false);

  const handleTicket = () => {
    setShowTicketDetails((prevState) => !prevState);
  };

  const [show, setShow] = useState({
    contact: false,
    terms: false,
    invoice: false,
    ticketScanner: false,
  });
  const handleShow = (section) => {
    setShow((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  return (
    <div className="min-h-screen w-full bg-[#0f0f10] md:p-7 p-5">
      <div className="md:flex block justify-between items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} />
        <div className="flex justify-between items-center md:w-[16%] w-full md:mt-0 mt-3">
          <div>
            <Image
              src={"/images/user.png"}
              width={40}
              height={40}
              className="rounded-xl"
              alt="user icon"
            />
          </div>
          <div className="flex justify-between items-center bg-[#1B1B1B] rounded-xl p-2 w-[80%]">
            <div>
              <p className="text-[#494949] md:text-[11px] text-[10px] font-bold">
                Welcome back
              </p>
              <p className="text-white md;text-[14px] text-[12px] mt-[2px] font-semibold">
                Andrew Johnson
              </p>
            </div>
            <div className="bg-[#171617] rounded-[50%] p-2 text-[12px] text-white">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex block justify-between items-start mt-4 w-full">
        <div className="md:w-[78%] w-full">
          <div className="flex md:w-[60%] w-full justify-between items-end mb-5">
            <div className="md:block hidden">
              <p className="text-white md:text-[22px] text-[12px] font-bold">
                Home
              </p>
              <p className="text-[#494949] md:text-[12px] text-[10px] font-bold mt-1">
                See mbrace the bold, the unconventional, and the raw
              </p>
            </div>
            <div
              className="bg-[#7a844a] md:rounded-xl md:w-auto w-full rounded-md md:p-2 p-2 md:text-[17px] text-[11px] font-semibold cursor-pointer text-center"
              onClick={() => setShowEvent(true)}
            >
              + Create Event
            </div>
          </div>
          <div className="w-full md:flex block justify-between items-center">
            <SellerGraph />
            <div className="md:w-[35%] w-full">
              <div className="w-full flex justify-between items-center p-2 bg-[#1b1b1b] rounded-xl md:mt-0 mt-4 h-[30%]">
                <div className="bg-[#7a844a] w-[48%] rounded-xl p-3">
                  <div className="bg-[#0f0f10] rounded-[50%] p-2 w-fit">
                    <Image src={"/images/event.png"} width={10} height={330} />
                  </div>
                  <p className="text-[#1b1b1b] text-[19px] font-bold mt-1">
                    74089
                  </p>
                  <p className="text-[#1b1b1b] text-[11px] mt-[2px] font-semibold">
                    Total Ticket Sell
                  </p>
                </div>
                <div className="bg-white w-[48%] rounded-xl p-3">
                  <div className="bg-[#0f0f10] rounded-[50%] p-2 w-fit">
                    <Image src={"/images/sell.png"} width={15} height={330} />
                  </div>
                  <p className="text-[#1b1b1b] text-[19px] font-bold mt-1">
                    $8,234.19
                  </p>
                  <p className="text-[#1b1b1b] text-[11px] mt-[2px] font-semibold">
                    Total Sell (USD)
                  </p>
                </div>
              </div>
              <div className="w-full p-3 bg-[#1b1b1b] rounded-xl mt-4 h-[70%]">
                <div className="flex justify-between items-center h-[20%]">
                  <p className="text-white md:text-[22px] text-[14px] font-bold">
                    Heat Map
                  </p>
                  <div className="flex justify-end items-center gap-1 px-2 py-1 bg-[#494949] text-white md:text-[12px] text-[10px] rounded-md">
                    <p>This Month</p>
                    <IoIosArrowDown />
                  </div>
                </div>
                <div className="w-full h-[70%] mb-1">
                  <Image
                    src="/images/map.jpeg"
                    layout="responsive"
                    width={300}
                    height={100}
                    objectFit="cover"
                    className="w-full h-auto"
                  />
                </div>
                <ProgressBar
                  label="Average Selling"
                  value={92}
                  color="#7a844a"
                  percentage={92}
                />
                <ProgressBar
                  label="User Grain"
                  value={67}
                  color="#0f0f10"
                  percentage={67}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 md:flex block justify-between items-center">
            <div className="md:w-[48%] w-full bg-[#1b1b1b] md:p-5 p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <Link
                  href={"/seller/past"}
                  className="text-white md:text-[22px] text-[14px] font-semibold uppercase"
                >
                  Past Events
                </Link>
                <p
                  className="bg-[#7a844a] md:p-2 p-1 rounded-md md:text-[12px] text-[10px] font-semibold cursor-pointer"
                  onClick={() => setShowEvent(true)}
                >
                  + Create Event
                </p>
              </div>
              <div className="mt-7">
                <div className="flex justify-between items-center border-b border-b-[#0f0f10] p-1 md:mt-4 mt-2">
                  <div>
                    <p className="text-white md:text-[14px] text-[11px]">
                      D` BROWN CAPITALISM
                    </p>
                    <p className="md:text-[12px] text-[10px] text-[#494949]">
                      BY BLACK MAMBA
                    </p>
                  </div>
                  <div>
                    <p className="text-white md:text-[11px] text-[9px] uppercase">
                      APR 2023
                    </p>
                    <p className="text-[#7a844a] md:text-[11px] text-[9px]">
                      Insights
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-b-[#0f0f10] p-1 md:mt-4 mt-2">
                  <div>
                    <p className="text-white md:text-[14px] text-[11px]">
                      D` BROWN CAPITALISM
                    </p>
                    <p className="md:text-[12px] text-[10px] text-[#494949]">
                      BY BLACK MAMBA
                    </p>
                  </div>
                  <div>
                    <p className="text-white md:text-[11px] text-[9px] uppercase">
                      APR 2023
                    </p>
                    <p className="text-[#7a844a] md:text-[11px] text-[9px]">
                      Insights
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-b-[#0f0f10] p-1 md:mt-4 mt-2">
                  <div>
                    <p className="text-white md:text-[14px] text-[11px]">
                      D` BROWN CAPITALISM
                    </p>
                    <p className="md:text-[12px] text-[10px] text-[#494949]">
                      BY BLACK MAMBA
                    </p>
                  </div>
                  <div>
                    <p className="text-white md:text-[11px] text-[9px] uppercase">
                      APR 2023
                    </p>
                    <p className="text-[#7a844a] md:text-[11px] text-[9px]">
                      Insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[48%] w-full md:mt-0 mt-4 bg-[#1b1b1b] md:p-4 p-3 rounded-xl">
              <div className="flex justify-between items-center">
                <Link
                  href="/seller/upcoming"
                  className="text-white md:text-[22px] text-[14px] font-semibold uppercase"
                >
                  Upcoming Events
                </Link>
                <div className="flex justify-between items-center bg-[#0f0f10] rounded-md px-2 py-1 gap-1  text-white md:text-[11px] text-[10px]">
                  <p className="text-white text-[11px] font-semibold">Online</p>

                  <IoIosArrowDown />
                </div>
              </div>
              <div className="no-scrollbar w-full flex justify-start items-center gap-3 mt-2 overflow-x-scroll">
                <div className="rounded-xl bg-[#292929] min-w-[200px]">
                  <Image
                    src={"/images/ticket.png"}
                    width={200}
                    height={100}
                    className="rounded-t-xl object-contain"
                    allt="Ticket Image"
                  />
                  <div className="p-2 flex justify-start items-end">
                    <div>
                      <p className="text-white text-[12px]">
                        D` BROWN CAPITALISM
                      </p>
                      <p className="text-[10px] text-[#494949]">
                        BY BLACK MAMBA
                      </p>
                    </div>
                    <div className="text-[10px] text-white uppercase">
                      Apr 2023
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#292929] min-w-[200px]">
                  <Image
                    src={"/images/ticket.png"}
                    width={200}
                    height={100}
                    className="rounded-t-xl object-contain"
                    alt="Ticket Image"
                  />
                  <div className="p-2 flex justify-start items-end">
                    <div>
                      <p className="text-white text-[12px]">
                        D` BROWN CAPITALISM
                      </p>
                      <p className="text-[10px] text-[#494949]">
                        BY BLACK MAMBA
                      </p>
                    </div>
                    <div className="text-[10px] text-white uppercase">
                      Apr 2023
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#292929] min-w-[200px]">
                  <Image
                    src={"/images/ticket.png"}
                    width={200}
                    height={100}
                    className="rounded-t-xl object-contain"
                    alt="Ticket Image"
                  />
                  <div className="p-2 flex justify-start items-end">
                    <div>
                      <p className="text-white text-[12px]">
                        D` BROWN CAPITALISM
                      </p>
                      <p className="text-[10px] text-[#494949]">
                        BY BLACK MAMBA
                      </p>
                    </div>
                    <div className="text-[10px] text-white uppercase">
                      Apr 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[20%] w-full bg-[#1b1b1b]  rounded-2xl p-6 md:mt-7 mt-4">
          <p className="text-white text-[22px] font-semibold uppercase">
            Checkout
          </p>
          <div className="flex justify-between items-center mt-3 md:w-[50%] w-full">
            <p className="text-white text-[12px] mt-[2px] ">Sub-Total:</p>
            <p className="text-white text-[12px] mt-[2px] ">$8,234.19</p>
          </div>
          <div className="flex justify-between items-center mt-3 md:w-[50%] w-full">
            <p className="text-white text-[12px] mt-[2px] ">Total Payable:</p>
            <p className="text-white text-[12px] mt-[2px] ">$8,234.19</p>
          </div>

          <p className="text-white text-[22px] font-semibold mt-6 uppercase">
            Documents
          </p>
          <p className="text-[#494949] text-[12px] mt-[6px]">
            See mbrace the bold, See mbrace the bold,
          </p>
          <div className="mt-5 border-b w-full border-b-[#0f0f10] pb-1">
            <div className="flex justify-between items-center">
              <p className="text-white text-[13px]">Contact Us</p>
              <IoIosArrowDown
                className="text-white text-[12px]"
                onClick={(e) => handleShow("contact")}
              />
            </div>
            {show["contact"] && (
              <div className="bg-[#0f0f10] rounded-xl p-2 mt-2">
                <div className="flex justify-between items-center text-[11px] mt-2 ">
                  <p className="text-white">Email: </p>
                  <a
                    className="text-[#494949]"
                    href="mailto:emailaddress@gmail.com"
                    target="_blank"
                  >
                    emailaddress@gmail.com
                  </a>
                </div>
                <div className="flex justify-between items-center text-[11px] mt-2">
                  <p className="text-white">Contact No: </p>
                  <a
                    className="text-[#494949]"
                    href="tel:+1234567890"
                    target="_blank"
                  >
                    +1234567890
                  </a>
                </div>
                <div className="flex justify-between items-center text-[11px] mt-2">
                  <p className="text-white">Address: </p>
                  <p className="text-[#494949]">
                    Califronia 37882, United States
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-3 border-b w-full border-b-[#0f0f10] pb-1">
            <div className="flex justify-between items-center">
              <p className="text-white text-[13px]">Terms & Conditions</p>
              <IoIosArrowDown
                className="text-white text-[12px]"
                onClick={(e) => handleShow("terms")}
              />
            </div>
            {show["terms"] && (
              <div className="text-[#494949] text-[11px] text-justify bg-[#0f0f10] rounded-xl p-2 mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&aposs standard dummy
                text ever since the 1500s,
              </div>
            )}
          </div>
          <div className="mt-3 border-b w-full border-b-[#0f0f10] pb-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-[13px]">Invoice</p>
              </div>
              <IoIosArrowDown
                className="text-white text-[12px]"
                onClick={(e) => handleShow("invoice")}
              />
            </div>
            {show["invoice"] && (
              <div className="w-full bg-[#0f0f10] rounded-xl p-2 mt-2">
                <div className="h-[200px] w-full bg-white mt-2"></div>
                <button className="w-full bg-[#7a844a] text-[#0F0F10] p-1 mt-2 rounded-md font-semibold">
                  Download Invoice
                </button>
              </div>
            )}
          </div>
          <div className="w-full">
            <div
              className="mt-9 flex justify-center items-center gap-2 "
              onClick={(e) => handleShow("ticketScanner")}
            >
              <BsQrCodeScan className="text-[#494949] text-[15px]" />
              <p className="text-white text-[15px] uppercase">Ticket Scanner</p>
            </div>
            {show["ticketScanner"] && (
              <div>
                <Ticket handleTicketShow={handleTicket} />
                <Ticket handleTicketShow={handleTicket} />
                <Ticket handleTicketShow={handleTicket} />
                <Ticket handleTicketShow={handleTicket} />
                <Ticket handleTicketShow={handleTicket} />
                <Ticket handleTicketShow={handleTicket} />
              </div>
            )}
          </div>
        </div>
      </div>
      {showTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-40">
          <div className="bg-[#1b1b1b] rounded-xl relative md:p-7 p-3 md:w-[45%] w-[95%] flex justify-center items-center flex-col md:min-h-[50vh] min-h-[90vh] overflow-y-scroll no-scrollbar">
            <div className="md:flex md:justify-between items-center w-full mt-[10px]">
              <div className="md:w-[32%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Name*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter name"
                />
              </div>
              <div className="md:w-[32%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Amount*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter amount"
                />
              </div>
              <div className="md:w-[32%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Price*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="md:w-[48%] w-[full]">
                <label className="text-[#B3B3B3] text-[12px]">
                  Fee to be paid by the buyer
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
              <div className="md:w-[48%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Fee to be paid by the seller
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="md:w-[48%] w-[full]">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Starttime
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="date"
                  placeholder="Enter starttime"
                />
              </div>
              <div className="md:w-[48%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Endtime*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="date"
                  placeholder="Enter endtime"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Description*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter description"
                />
              </div>
            </div>
            <div
              className="mt-2 w-full"
              onClick={() => {
                setShowTicketSaved(true);
                setShowTicket(false);
              }}
            >
              <button className="w-full bg-[#7A844A] text-[#0F0F10] p-3 rounded-[9px] mt-4 text-[13px] font-bold">
                Save Ticket
              </button>
            </div>
            <VscError
              className="absolute top-2 right-2 text-[22px] text-[#494949] hover:cursor-pointer"
              onClick={() => setShowTicket(false)}
            />
          </div>
        </div>
      )}
      {showTicketSaved && (
        <TicketSaved
          setShowTicketSaved={setShowTicketSaved}
          setShowTicket={setShowTicket}
        />
      )}
      {showEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-30 ">
          <div className="bg-[#1b1b1b] rounded-xl relative md:p-7 p-4 md:w-[55%] w-[95%]  flex justify-center items-center flex-col md:min-h-[60vh] h-auto overflow-y-scroll no-scrollbar">
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Event Name*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter name"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Event Image*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="file"
                  placeholder="Upload File"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Event Description*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter description"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-[10px]">
              <div className="md:w-[32%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">Date*</label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="date"
                  placeholder="Enter date"
                />
              </div>
              <div className="md:w-[32%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">Time*</label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="time"
                  placeholder="Enter amount"
                />
              </div>
              <div className="md:w-[32%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">Location*</label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter duration"
                />
              </div>
            </div>
            <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="md:w-[48%] w-[full]">
                <label className="text-[#B3B3B3] text-[12px]">
                  Event Starttime
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="time"
                  placeholder="Enter starttime"
                />
              </div>
              <div className="md:w-[48%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Event Endtime
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="time"
                  placeholder="Enter endtime"
                />
              </div>
            </div>
            {/* <div className="md:flex md:justify-between items-center w-full mt-3">
              <div className="md:w-[85%] w-full">
                <label className="text-[#B3B3B3] text-[12px]">
                  Ticket Description*
                </label>
                <input
                  className="w-full bg-[#171617] text-white p-3 rounded-xl mt-1 text-[12px] outline-none border-none"
                  type="text"
                  placeholder="Enter description"
                />
              </div>
              <div
                className="md:w-[13%] w-full mt-2"
                onClick={() => setShowTicket(true)}
              >
                <button className="w-full bg-[#7A844A] text-[#0F0F10] p-2 rounded-[9px] mt-4 text-[13px] font-bold">
                  + Add Ticket
                </button>
              </div>
            </div> */}
            <div
              className="mt-2 w-full"
              onClick={() => {
                setShowEventSaved(true);
                setShowEvent(false);
              }}
            >
              <button className="w-full bg-[#7A844A] text-[#0F0F10] p-3 rounded-[9px] mt-4 text-[13px] font-bold">
                Save Event
              </button>
            </div>
            <VscError
              className="absolute top-2 right-2 text-[22px] text-[#494949] hover:cursor-pointer"
              onClick={() => setShowEvent(false)}
            />
          </div>
        </div>
      )}
      {showEventSaved && (
        <EventSaved
          setShowEventSaved={setShowEventSaved}
          setShowTicket={setShowTicket}
        />
      )}
      {showTicketDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-[#1b1b1b] rounded-xl relative md:p-4 p-1 w-[300px] flex justify-center items-center flex-col">
            <div className="mt-4">
              <QRCodeComponent />
            </div>
            <p className="text-[#494949] text-[12px] mt-2">
              See mbrace the bold, the unconventional
            </p>
            <VscError
              className="absolute top-2 right-2 text-[22px] text-[#494949] hover:cursor-pointer"
              onClick={() => handleTicket()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
