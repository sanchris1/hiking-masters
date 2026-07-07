/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { UpcomingExpedition } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { BsCopy, BsEye, BsTrash } from "react-icons/bs";
import { FiArchive, FiEdit } from "react-icons/fi";

const ActionButtonComponent = ({
  position,
  expedition,
  onClose,
}: {
  position: Record<string, number>;
  expedition: UpcomingExpedition;
  onClose: (expedition: UpcomingExpedition | null) => void;
}) => {
  const router = useRouter();

  const actions = [
    {
      label: "View Details",
      icon: BsEye,
      onClick: () => console.log("View"),
    },
    {
      label: "Edit Expedition",
      icon: FiEdit,
      onClick: () => router.push(`/admin/expeditions/${expedition.id}/edit`),
    },
    {
      label: "Duplicate",
      icon: BsCopy,
      onClick: () => console.log("Duplicate"),
    },
    {
      label: "Archive",
      icon: FiArchive,
      onClick: () => console.log("Archive"),
    },
    {
      label: "Delete",
      icon: BsTrash,
      onClick: () => console.log("Delete"),
      danger: true,
    },
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCloseDropDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose(null);
      }
    };

    document.addEventListener("mousedown", handleCloseDropDown);

    return () => document.removeEventListener("mousedown", handleCloseDropDown);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="fixed z-50 w-auto min-w-64 p-5 bg-background shadow-xl rounded-2xl"
      style={{ top: position.y + 8, left: position.x - 250 }}
    >
      <div className="space-y-5">
        <div className="">
          <h3 className="text-primary text-[15px] max-w-xs font-bold tracking-wide">
            {expedition.title}
          </h3>
          <span className="text-xs text-red-600 bg-red-100 rounded-full px-2 py-0.5 border border-red-600">
            Action Dropdown
          </span>
        </div>
        <div className="space-y-1.5">
          {actions.map((action) => (
            <div
              onClick={action.onClick}
              key={action.label}
              className={`${action.danger ? "text-red-600 bg-red-100 border-red-600 hover:bg-red-200 hover:text-red-700" : "text-secondary border-secondary bg-secondary/20 hover:text-primary hover:bg-secondary/40"} cursor-pointer border rounded-2xl text-sm font-medium w-full flex  items-center gap-3 px-3 py-1 transition-all duration-200`}
            >
              <div className="">
                <action.icon />
              </div>
              <span> {action.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionButtonComponent;
