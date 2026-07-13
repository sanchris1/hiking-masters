"use client";

import { UpcomingExpedition } from "@/types/types";
import FilteredExpeditionsBody from "./FilteredExpeditionsBody";
import { useState } from "react";
import ActionButtonComponent from "../../components/ActionButtonComponent";

const ExpeditionsFilterTable = ({
  filteredExpeditions,
}: {
  filteredExpeditions: UpcomingExpedition[];
}) => {
  const expeditionTableFilterHeaders = [
    { title: "Expeditions", width: "w-[300px]" },
    { title: "Date & Duration", width: "w-[170px]" },
    { title: "Guide", width: "w-[150px]" },
    { title: "Difficulty", width: "w-[120px]" },
    { title: "Slots", width: "w-[120px]" },
    { title: "Status", width: "w-[120px]" },
    { title: "Action", width: "w-[80px]" },
  ];

  // opening the drop down

  const [selectedExpedition, setSelectedExpedition] =
    useState<UpcomingExpedition | null>(null);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleOpenActionMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    expedition: UpcomingExpedition,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMenuPosition({
      x: rect.right,
      y: rect.bottom,
    });

    setSelectedExpedition(expedition);
  };

  return (
    <>
      <table className="w-full border-separate border-spacing-0 bg-surface-50 min-w-0">
        <thead>
          <tr>
            {expeditionTableFilterHeaders.map((header) => (
              <th
                key={header.title}
                className={`${header.width} px-6 py-4 text-left text-sm font-semibold uppercase text-primary`}
              >
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-surface-50 ">
          {filteredExpeditions.map((expedition) => (
            <FilteredExpeditionsBody
              key={expedition.id}
              expedition={expedition}
              handleOpenActionMenu={handleOpenActionMenu}
            />
          ))}
        </tbody>
      </table>
      {selectedExpedition && (
        <ActionButtonComponent
          onClose={() => setSelectedExpedition(null)}
          position={menuPosition}
          expedition={selectedExpedition}
        />
      )}
    </>
  );
};

export default ExpeditionsFilterTable;
