"use client";
import Image from "next/image";
import TotalProfiles from "@/components/TotalProfiles";
import Commissions from "@/components/Commissions";
import AdminStats from "@/components/AdminStats";
import CashoutEvents from "@/components/CashoutEvents";
import EndingEvents from "@/components/EndingEvents";
import SoldTickets from "@/components/SoldTickets";
import Transactions from "@/components/Transactions";

export default function Admin() {
  return (
    <div className="min-h-screen w-full bg-[#0f0f10] md:p-9 p-5">
      <div className="flex md:justify-start justify-center items-center">
        <Image src={"/images/Logo.gif"} width={70} height={330} alt="Image" />
      </div>
      <div className="md:flex md:justify-between block items-center mt-6">
        <TotalProfiles />
        <AdminStats />
        <CashoutEvents />
      </div>
      <div className="md:flex md:justify-between block items-center mt-6">
        <EndingEvents />
        <SoldTickets />
      </div>
      <div className="md:flex md:justify-between block items-center md:mt-6 mt-4">
        <Commissions />
        <Transactions />
      </div>
    </div>
  );
}
