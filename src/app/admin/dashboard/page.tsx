"use client";
import { BiPlus } from "react-icons/bi";
import AdminDashboardStats from "../components/admin-dashboard/AdminDashboardStats";
import AdminChart from "../components/admin-dashboard/AdminChart";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
  return (
    <div className="mx-3 my-4  space-y-8">
      {/* header */}
      <div className="flex items-center justify-between w-full ">
        <div className="space-y-1">
          <h1 className="text-3xl text-primary font-semibold leading-relaxed tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-secondary font-medium text-sm">
            Monitor bookings, expeditions,payments and customer activity from
            one place.
          </p>
        </div>
        <button
          className="bg-primary text-surface-200 px-5 py-2 rounded-xl text-sm flex items-center font-medium cursor-pointer  gap-2"
          onClick={() => router.push("/admin/expeditions/new")}
        >
          <BiPlus />
          Add new Expeditions
        </button>
      </div>

      {/* content */}
      <div className="flex flex-col gap-12">
        <AdminDashboardStats />
        <AdminChart />
      </div>
    </div>
  );
};

export default AdminDashboard;
