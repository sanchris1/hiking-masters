import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "admin-Superhikers",
  description: "New generation hikers website-admin",
};
const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default AdminLayout;
