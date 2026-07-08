"use client";

import Logo from "@/app/(user)/components/logo/Logo";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const AuthNav = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between  p-2 z-999 bg-background/30 backdrop-blur-xl ">
      <Logo />
      <p
        className="cursor-pointer text-primary border-primary border-2 px-3 py-1 hover:bg-primary/10 transition-all duration-100 rounded-xl active:bg-primary/20 flex items-center gap-2 active:gap-3 hover:gap-2.5"
        onClick={() => router.back()}
      >
        {" "}
        <IoArrowBack className="size-6" />
        Back
      </p>
    </nav>
  );
};

export default AuthNav;
