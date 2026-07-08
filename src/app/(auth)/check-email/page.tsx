"use client";

import { ArrowLeft, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="bg-background h-full w-full">
      <div className="flex items-center justify-center w-full h-screen">
        {/* image */}
        <div className="hidden md:block w-7/12 h-screen relative">
          <Image
            src="/auth/email.png"
            alt="register-image"
            fill
            className="object-cover "
          />
          <div className="bg-linear-to-t from-primary/60 via-primary/30 to-transparent absolute inset-0" />
          <div className="absolute bottom-0 mb-28  max-w-2xl right-0  p-12 left-0">
            <h1 className="text-surface-50 font-semibold leading-relaxed text-5xl text-center tracking-wider">
              The summit is closer than you{" "}
              <span className="text-accent">Think</span>
            </h1>
          </div>
        </div>
        {/* inputs */}
        <div className="w-full md:w-5/12 flex items-center justify-center">
          <div className="p-5 shadow-2xl rounded-lg min-w-96 lg:min-w-120 w-auto bg-surface-100 space-y-12 flex items-center flex-col">
            <div className="space-y-2">
              <div className="  flex items-center justify-center p-2 bg-surface-200 rounded-full">
                <Mail className="size-18" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight  text-primary text-center">
                Check Your Email
              </h3>
              <p className="text-secondary font-medium text-sm max-w-lg text-center">
                We have sent some email with the instructions on how to reset
                the password. Use it to continue with the services
              </p>
            </div>

            <button className="w-full cursor-pointer py-3 text-lg text-surface-50 rounded-lg  bg-accent/90 hover:bg-accent/95 active:bg-accent transition-all duration-150 font-semibold">
              Resend Verification Link
            </button>

            <Link
              className="text-center text-secondary text-sm flex items-center gap-2 w-full font-semibold hover:text-accent"
              href={"/forgot-password"}
            >
              Change email address
            </Link>
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

export default RegisterPage;
