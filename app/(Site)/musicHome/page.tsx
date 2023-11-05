"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "@/Components/Sidebar";
import MainUserContent from "@/Components/MainUserContent";

type Props = {};

function musicHome({}: Props) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="h-full border-r-8 border-[#104b53]"></div>
      <div className="flex-1 h-full overflow-y-auto py-2">
        <MainUserContent />
      </div>
    </div>
  );
}

export default musicHome;
