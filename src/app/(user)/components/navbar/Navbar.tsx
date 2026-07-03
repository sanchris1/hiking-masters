"use client";

import Link from "next/link";
import Logo from "../logo/Logo";
import Button from "@/app/ui/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

export const myNavLinks = ["Explore", "About", "Contact"];
const Navbar = () => {
  const user = null;

  const pathname = usePathname();

  // states for the phone links
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="w-full  sticky top-0 left-0 right-0 shadow-lg z-50 bg-surface-50/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5   ">
        <nav className=" flex items-center justify-between  lg:px-0 h-20">
          <Logo />
          {/* desktop nav links  */}
          <div className="hidden lg:flex items-center gap-8 ">
            {myNavLinks.map((link) => (
              <Link
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                key={link}
                className={`${pathname.includes(link.toLowerCase()) ? "text-accent" : "text-primary"} hover:text-accent text-[15px] font-semibold  relative `}
              >
                {link}

                <span
                  className={`${pathname.includes(link.toLowerCase()) ? "w-full" : " w-0"}  absolute  h-0.5 bg-accent bottom-0 left-0 right-0 rounded-full`}
                />
              </Link>
            ))}
          </div>
          {/* cta button */}
          <div className="">
            {user ? (
              <Button type="button">My Trips</Button>
            ) : (
              <Button type="button">Login</Button>
            )}
          </div>

          {/* phone nav button */}
          <button
            className="block lg:hidden  border border-border p-3 rounded-2xl text-primary/70 hover:text-primary z-60"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          >
            {openMobileMenu ? (
              <IoClose className="size-5" />
            ) : (
              <GiHamburgerMenu className="size-5" />
            )}
          </button>
        </nav>
      </div>

      <MobileMenu
        setOpenMobileMenu={setOpenMobileMenu}
        openMobileMenu={openMobileMenu}
      />
    </div>
  );
};

export default Navbar;
