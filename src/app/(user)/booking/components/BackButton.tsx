"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="p-2 text-surface-50 rounded-full bg-primary/80"
      onClick={() => router.back()}
    >
      <BiArrowBack />
    </button>
  );
};

export default BackButton;
