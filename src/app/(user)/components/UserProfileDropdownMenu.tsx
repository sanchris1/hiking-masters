/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Backpack,
  Bell,
  CircleHelp,
  Heart,
  LogOut,
  MapPinned,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MdAdminPanelSettings } from "react-icons/md";

const UserProfileDropdownMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const userDropdownItems = [
    {
      id: "profile",
      label: "My Profile",
      icon: User,
      href: "/profile",
    },
    {
      id: "bookings",
      label: "My Bookings",
      icon: Backpack,
      href: "/bookings",
    },
    {
      id: "saved-expeditions",
      label: "Saved Expeditions",
      icon: Heart,
      href: "/saved",
    },
    {
      id: "my-trips",
      label: "My Trips",
      icon: MapPinned,
      href: "/trips",
    },
    {
      id: "divider-1",
      divider: true,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      href: "/notifications",
    },
    {
      id: "account-settings",
      label: "Account Settings",
      icon: Settings,
      href: "/settings",
    },
    {
      id: "divider-2",
      divider: true,
    },
    {
      id: "help-support",
      label: "Help & Support",
      icon: CircleHelp,
      href: "/support",
    },
    {
      id: "divider-3",
      divider: true,
    },
    {
      id: "logout",
      label: "Logout",
      icon: LogOut,
      action: "logout",
      danger: true,
    },
    {
      id: "admin",
      label: "Log to Admin",
      icon: MdAdminPanelSettings,
      adminSensitive: true,
    },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const user: any = false;

  useEffect(() => {
    const handleCloseDropdown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleCloseDropdown);

    return () => document.removeEventListener("mousedown", handleCloseDropdown);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`fixed p-5  top-10 right-5  z-999  shadow-2xl  bg-background rounded-2xl w-64   ${open ? "opacity-100 " : "opacity-0"} max-w-sm space-y-4`}
    >
      <div className="">
        <h6 className="text-lg leading-relaxed font-semibold text-primary">
          Peter Oyaro
        </h6>
        <span className="text-secondary text-sm">oyaro@gmail.com</span>
      </div>
      <div className="space-y-2">
        {userDropdownItems.map((item) => (
          <div
            key={item.id}
            className={`font-medium  p-1 rounded ${item.danger ? "bg-red-100 text-red-600" : "text-secondary"}`}
          >
            {item.divider ? (
              <div className="w-full h-px bg-primary" />
            ) : item.adminSensitive ? (
              user?.admin && (
                <Link
                  href={"/admin"}
                  className="flex gap-2 items-center text-[15px]"
                >
                  <item.icon /> {item.label}
                </Link>
              )
            ) : item.action ? (
              <button className="flex items-center gap-2">
                <item.icon />
                {item.label}
              </button>
            ) : (
              <Link
                href={item.href!}
                className="flex items-center gap-2 text-[15px]"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileDropdownMenu;
