import { Metadata } from "next";
import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/admin-nav/AdminNavbar";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/server-actions/getCurrentSession";

export const metadata: Metadata = {
  title: "admin-Trails and Memoirs",
  description: "New generation hikers website-admin",
};
const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getCurrentSession();

  if (!session || session?.user?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="flex h-screen bg-surface-100">
      <AdminSidebar />

      <div className="flex flex-1 min-w-0 flex-col">
        <AdminNavbar />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
