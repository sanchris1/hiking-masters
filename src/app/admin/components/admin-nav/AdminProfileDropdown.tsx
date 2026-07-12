/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  BookOpen,
  CircleHelp,
  HomeIcon,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { authClient } from "../../../../../utils/auth-client";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const AdminProfileDropdown = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const router = useRouter();
  const profileDropdownItems = [
    {
      id: "profile",
      label: "My Profile",
      icon: User,
      href: "/admin/profile",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
    {
      id: "divider-1",
      divider: true,
    },
    {
      id: "help-center",
      label: "Help Center",
      icon: CircleHelp,
      href: "/admin/help",
    },
    {
      id: "documentation",
      label: "Documentation",
      icon: BookOpen,
      href: "/admin/docs",
    },
    {
      id: "divider-2",
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
      id: "home",
      label: "Home Page",
      icon: HomeIcon,
      href: "/",
    },
  ];

  const user = useCurrentUser();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

  // const handle logout
  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/");
    router.refresh();
  };

  return (
    <div
      ref={dropdownRef}
      className={`fixed p-5  top-10 right-5   shadow-2xl  bg-background rounded-2xl w-64   ${open ? "opacity-100 " : "opacity-0 pointer-events-none"} max-w-sm space-y-4 z-50`}
    >
      <div className="">
        <h6 className="text-lg leading-relaxed font-semibold text-primary">
          {user?.name}
        </h6>
        <span className="text-secondary text-sm">{user?.email}</span>
      </div>
      <div className="space-y-1.5">
        {profileDropdownItems.map((item) => (
          <div
            key={item.id}
            className={` ${item.divider ? "" : "bg-accent/5  hover:bg-accent/10"}  flex items-center gap-3  font-medium  p-1 rounded ${item.danger ? "bg-red-100 text-red-600" : "text-secondary"} cursor-pointer`}
          >
            {item.href && (
              <>
                <item.icon />
                <a
                  href={item.href}
                  className="text-[15px] font-medium text-secondary"
                >
                  {item.label}
                </a>
              </>
            )}

            {item.divider && <div className="w-full h-px bg-primary" />}

            {item.action && (
              <span
                onClick={handleLogout}
                key={item.label}
                className="flex items-center gap-2 text-[15px]  "
              >
                <item.icon />
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProfileDropdown;
