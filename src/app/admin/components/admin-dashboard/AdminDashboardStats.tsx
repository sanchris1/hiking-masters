import { dashboardStats } from "@/items/admin.dummy";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const AdminDashboardStats = () => {
  return (
    <div className="flex items-center  flex-nowrap justify-between">
      {dashboardStats.map((stat) => (
        <div key={stat.id} className="space-y-2 p-3 shadow-2xl rounded-xl w-62">
          <div className="flex items-start justify-between">
            <div
              className={`text-surface-200 ${stat.color === "blue" ? "bg-blue-800" : stat.color === "green" ? "bg-green-900" : stat.color === "purple" ? "bg-purple-700" : stat.color === "orange" ? "bg-orange-800" : stat.color === "yellow" ? "bg-yellow-800" : "bg-red-600"} p-1.5 rounded-lg`}
            >
              <stat.icon className="size-5" />
              <h6 className="text-xs font-semibold">{stat.title}</h6>
            </div>
            <span
              className={`${stat.trend === "up" ? "bg-primary/80" : "bg-red-500"} text-surface-200   flex  items-center justify-center rounded-full text-sm gap-3 px-2`}
            >
              {stat.trend === "up" ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
              {stat.percentage} %
            </span>
          </div>
          <p className="text-lg font-semibold text-secondary">{stat.value}</p>
          <p className="text-secondary font-medium text-sm tracking-tight">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardStats;
