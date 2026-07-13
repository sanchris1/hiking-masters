"use client";

import { usePathname } from "next/navigation";
import { BiBarChart, BiCreditCard, BiMessageSquare } from "react-icons/bi";
import { FaMountain } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FcSettings } from "react-icons/fc";
import { FiLifeBuoy } from "react-icons/fi";
import {
  LuClipboardList,
  LuLayoutDashboard,
  LuUserRound,
} from "react-icons/lu";
import { PiUserSquare } from "react-icons/pi";

const adminSidebar = [
  {
    id: "overview",
    title: "Overview",
    links: [
      {
        id: "dashboard",
        label: "Dashboard",
        href: "/admin/dashboard",
        icon: LuLayoutDashboard,
      },
    ],
  },

  {
    id: "management",
    title: "Adventure Management",
    links: [
      {
        id: "expeditions",
        label: "Expeditions",
        href: "/admin/expeditions",
        icon: FaMountain,
      },
      {
        id: "schedule",
        label: "Schedule",
        href: "/admin/schedule",
        icon: FaCalendarDays,
      },
      {
        id: "bookings",
        label: "Bookings",
        href: "/admin/bookings",
        icon: LuClipboardList,
      },
    ],
  },

  {
    id: "customers",
    title: "Customers",
    links: [
      {
        id: "customers",
        label: "Customers",
        href: "/admin/customers",
        icon: PiUserSquare,
      },
      {
        id: "guides",
        label: "Guides",
        href: "/admin/guides",
        icon: LuUserRound,
      },
      {
        id: "reviews",
        label: "Reviews",
        href: "/admin/reviews",
        icon: BiMessageSquare,
      },
    ],
  },

  {
    id: "business",
    title: "Business",
    links: [
      {
        id: "payments",
        label: "Payments",
        href: "/admin/payments",
        icon: BiCreditCard,
      },
      {
        id: "analytics",
        label: "Analytics",
        href: "/admin/analytics",
        icon: BiBarChart,
      },
    ],
  },

  {
    id: "system",
    title: "System",
    links: [
      {
        id: "settings",
        label: "Settings",
        href: "/admin/settings",
        icon: FcSettings,
      },
      {
        id: "support",
        label: "Support",
        href: "/admin/support",
        icon: FiLifeBuoy,
      },
    ],
  },
];
const AdminSidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-64 h-screen shadow-xl pr-2 shrink-0">
      <div className="my-1 flex flex-col items-start p-4 gap-5">
        {adminSidebar.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-3.5">
            <h4 className="text-[16px] font-semibold text-primary">
              {item.title}
            </h4>

            {item.links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`    flex items-center gap-3  px-2  ml-4 w-full py-1 rounded-lg text-sm font-medium  hover:text-surface-50 hover:bg-primary transition-all duration-200  ${pathName.includes(link.href) ? "bg-primary text-surface-50" : "bg-surface-200/50 text-secondary"}`}
              >
                <link.icon /> {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
