"use client";

import InputComponent from "@/app/ui/Input";
import { useState } from "react";

const AdminNavbar = () => {
  const [search, setSearch] = useState("");

  const today = new Date().toLocaleString("en-US", {
    dateStyle: "full",
  });

  return (
    <nav className="sticky  shadow w-full  px-4">
      <div className="flex items-center justify-between ">
        {/* search */}
        <div className=" ">
          <InputComponent
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Search"
            as="input"
            name="search"
          />
        </div>
        {/* dates and profile */}
        <div className=" flex items-center gap-8">
          <p className=" text-[16px] font-semibold text-text-accent">{today}</p>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
