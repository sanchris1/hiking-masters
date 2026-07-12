import { Metadata } from "next";
import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/admin-nav/AdminNavbar";
import { auth } from "../../../utils/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "admin-Superhikers",
  description: "New generation hikers website-admin",
};
const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || session?.user?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="w-full min-h-screen bg-surface-100 ">
      <div className="flex gap-4">
        <AdminSidebar />
        <div className="flex flex-col gap-3 flex-1 ml-64">
          <AdminNavbar />
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
