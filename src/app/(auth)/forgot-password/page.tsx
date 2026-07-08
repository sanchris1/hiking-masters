"use client";

import InputComponent from "@/app/ui/Input";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const initialValues = {
    email: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-background h-full w-full">
      <div className="flex items-center justify-center w-full h-screen">
        {/* image */}
        <div className="hidden md:block w-7/12 h-screen relative">
          <Image
            src="/auth/forgot.png"
            alt="register-image"
            fill
            className="object-cover "
          />
          <div className="bg-linear-to-t from-primary/60 via-primary/30 to-transparent absolute inset-0" />
          <div className="absolute bottom-0 mb-28  max-w-2xl right-0  p-12 left-0">
            <h1 className="text-surface-50 font-semibold leading-relaxed text-5xl text-center tracking-wider">
              Re-discover the <span className="text-accent">Peak</span>
            </h1>
          </div>
        </div>
        {/* inputs */}
        <div className="w-full md:w-5/12 flex items-center justify-center">
          <div className="p-5 shadow-2xl rounded-lg min-w-96 lg:min-w-120 w-auto bg-surface-100 space-y-12 ">
            <div className="">
              <h3 className="text-3xl font-semibold tracking-tight  text-primary">
                Forgot Password ?
              </h3>
              <p className="text-secondary font-medium text-sm">
                No worries, we will send you reset instructions
              </p>
            </div>
            <div className="space-y-5">
              <InputComponent
                as="input"
                type="email"
                value={values.email}
                placeholder="example@gmail.com"
                onChange={handleChange}
                name="email"
                label="Email"
              />
            </div>
            <button className="w-full cursor-pointer py-3 text-lg text-surface-50 rounded-lg  bg-accent/90 hover:bg-accent/95 active:bg-accent transition-all duration-150 font-semibold">
              Send Reset Lnk
            </button>

            <Link
              className="text-center text-secondary text-sm flex items-center gap-2 w-full font-medium hover:text-accent"
              href={"/login"}
            >
              <ArrowLeft /> Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
