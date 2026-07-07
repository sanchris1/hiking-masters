import { UpcomingExpedition } from "@/types/types";
import FilteredExpeditionsBody from "./FilteredExpeditionsBody";

const ExpeditionsFilterTable = ({
  filteredExpeditions,
}: {
  filteredExpeditions: UpcomingExpedition[];
}) => {
  const expeditionTableFilterHeaders = [
    { title: "Expeditions", width: "w-[350px]" },
    { title: "Date & Duration", width: "w-[200px]" },
    { title: "Guide", width: "w-[180px]" },
    { title: "Difficulty", width: "w-[160px]" },
    { title: "Slots", width: "w-[180px]" },
    { title: "Status", width: "w-[160px]" },
    { title: "Action", width: "w-[80px]" },
  ];

  return (
    <table className="w-full border-separate border-spacing-0 bg-surface-50 min-w-325">
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
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpeditionsFilterTable;
