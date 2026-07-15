"use client";

import Link from "next/link";
import Logo from "../logo/Logo";
import Button from "@/app/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import UserProfileDropdownMenu from "../UserProfileDropdownMenu";
import { authClient } from "../../../../../utils/auth-client";

export const myNavLinks = ["Home", "Explore", "About", "Contact"];
const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // states for the phone links
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserDropdown, setOpenUserDropdown] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <>
      <div className="w-full  sticky top-0 left-0 right-0 shadow-lg z-50 bg-surface-50/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5   ">
          <nav className=" flex items-center justify-between  lg:px-0 h-20">
            <Logo />
            {/* desktop nav links  */}
            <div className="hidden lg:flex items-center gap-8 ">
              {myNavLinks.map((link) => (
                <Link
                  href={`${link.toLowerCase() === "home" ? "/" : "/" + link.toLowerCase()}`}
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
                <span
                  onClick={() => setOpenUserDropdown((prev) => !prev)}
                  className=" cursor-pointer flex items-center gap-2  font-medium bg-primary px-4 py-1 rounded text-surface-200 "
                >
                  Profile{" "}
                  {openUserDropdown ? (
                    <MdKeyboardArrowUp className="size-5" />
                  ) : (
                    <MdKeyboardArrowDown className="size-5" />
                  )}
                </span>
              ) : (
                <Button onClick={() => router.push("/login")} type="button">
                  Login
                </Button>
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
      <UserProfileDropdownMenu
        open={openUserDropdown}
        setOpen={setOpenUserDropdown}
      />
    </>
  );
};

export default Navbar;
