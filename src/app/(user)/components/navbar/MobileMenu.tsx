/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import { myNavLinks } from "./Navbar";
import { useEffect, useRef } from "react";

const MobileMenu = ({
  setOpenMobileMenu,
  openMobileMenu,
}: {
  openMobileMenu: boolean;
  setOpenMobileMenu: (prev: boolean) => void;
}) => {
  const mobileDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCloseMobileMenu = (e: MouseEvent) => {
      if (
        mobileDivRef.current &&
        !mobileDivRef.current.contains(e.target as Node)
      ) {
        setOpenMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleCloseMobileMenu);

    return () => {
      document.removeEventListener("mousedown", handleCloseMobileMenu);
    };
  }, []);

  return (
    <div
      ref={mobileDivRef}
      className={`${openMobileMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100 pointer-events-none"} z-50 transition ease-in-out duration-500  bg-card/95 py-5  backdrop-blur-xl h-80 m-6 rounded-4xl  fixed top-[50%] left-0 right-0 shadow-lg`}
    >
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center gap-8 ">
          {myNavLinks.map((link) => (
            <Link
              onClick={() => setOpenMobileMenu(false)}
              href={`${link.toLowerCase() === "home" ? "/" : "/" + link.toLowerCase()}`}
              key={link}
              className={`text-primary text-lg font-semibold    `}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
