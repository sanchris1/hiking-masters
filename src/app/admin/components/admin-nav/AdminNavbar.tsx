"use client";

import { useState } from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const AdminNavbar = () => {
  const [search, setSearch] = useState("");

  const today = new Date().toLocaleString("en-US", {
    dateStyle: "full",
  });

  return (
    <nav className="sticky  shadow w-full  px-4 top-0 bg-surface-100/70 backdrop-blur-2xl">
      <div className="flex items-center justify-between ">
        {/* search */}
        <div className=" relative">
          <input
            className="py-2 px-8 bg-surface-200 rounded-2xl w-100 outline-none border-2 text-primary font-semibold text-sm border-primary "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for the expeditions"
          />
          <BiSearch className="absolute top-1/2 left-1 -translate-y-1/2  text-primary size-6 pl-1" />
        </div>

        {/* dates and profile */}
        <div className=" flex items-center gap-8">
          <p className=" text-[16px] font-semibold text-text-accent">{today}</p>
          <div className="relative  cursor-pointer  hover:bg-secondary/10 p-1 rounded-full ">
            <BiBell className="size-5 text-primary" />
            <span className="absolute top-0 right-0 bg-accent rounded-full size-2"></span>
          </div>
          <div className="relative cursor-pointer  hover:bg-secondary/10 p-1 rounded-full ">
            <CiMail className="size-5 text-primary" />
            <span className="absolute top-0 right-0 bg-accent rounded-full size-2"></span>
          </div>

          <span className="text-primary">|</span>

          <span className="flex items-center gap-2 text-primary font-medium">
            Profile <MdKeyboardArrowDown className="size-5" />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
