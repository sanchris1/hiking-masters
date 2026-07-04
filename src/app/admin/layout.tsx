import { Metadata } from "next";
import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/admin-nav/AdminNavbar";

export const metadata: Metadata = {
  title: "admin-Superhikers",
  description: "New generation hikers website-admin",
};
const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full min-h-screen bg-surface-100 ">
      <div className="flex gap-4">
        <AdminSidebar />
        <div className="flex flex-col gap-3 flex-1 ">
          <AdminNavbar />
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
