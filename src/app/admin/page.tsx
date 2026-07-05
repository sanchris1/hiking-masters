"use client";

import { useRouter } from "next/navigation";

const AdminPages = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen flex-col max-w-3xl gap-5 mx-auto">
      <h3 className="font-semibold text-primary text-5xl text-center">
        Welcome to the admin screen
      </h3>
      <p className="text-center text-secondary text-sm font-medium">
        Stay on top of every expedition, booking, and customer interaction from
        one central place. Everything you need to manage is right here.
      </p>
      <button
        className="text-sm font-semibold text-surface-200 px-6 py-3 cursor-pointer bg-primary/95 hover:bg-primary transition-all duration-300 rounded-2xl"
        onClick={() => router.push("/admin/dashboard")}
      >
        Go to the dashboard
      </button>
    </div>
  );
};

export default AdminPages;
