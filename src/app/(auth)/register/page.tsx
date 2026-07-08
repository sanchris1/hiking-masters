"use client";

import InputComponent from "@/app/ui/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
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
            src="/auth/register.png"
            alt="register-image"
            fill
            className="object-cover "
          />
          <div className="bg-linear-to-t from-primary/60 via-primary/30 to-transparent absolute inset-0" />
          <div className="absolute bottom-0 mb-28  max-w-2xl right-0  p-12 left-0">
            <h1 className="text-surface-50 font-semibold leading-relaxed text-5xl text-center tracking-wider">
              Adventure Begins With{" "}
              <span className="text-accent">One Step</span>
            </h1>
          </div>
        </div>
        {/* inputs */}
        <div className="w-full md:w-5/12 flex items-center justify-center">
          <div className="p-5 shadow-2xl rounded-lg min-w-96 lg:min-w-120 w-auto bg-surface-100 space-y-12">
            <div className="">
              <h3 className="text-3xl font-semibold tracking-tight  text-primary">
                Join the SuperHikers
              </h3>
              <p className="text-secondary font-medium text-sm">
                Start your journey of adventure today
              </p>
            </div>
            <div className="space-y-5">
              <InputComponent
                as="input"
                type="text"
                value={values.name}
                placeholder="John Doe"
                onChange={handleChange}
                name="name"
                label="Full Name"
              />
              <InputComponent
                as="input"
                type="email"
                value={values.email}
                placeholder="example@gmail.com"
                onChange={handleChange}
                name="email"
                label="Email"
              />
              <InputComponent
                as="input"
                type="password"
                value={values.password}
                placeholder="********"
                onChange={handleChange}
                name="password"
                label="Enter password"
              />
            </div>
            <button className="w-full cursor-pointer py-3 text-lg text-surface-50 rounded-lg  bg-accent/90 hover:bg-accent/95 active:bg-accent transition-all duration-150 font-semibold">
              Create Account
            </button>

            <div className=" relative">
              <div className="h-px w-full bg-gray-300" />
              <span className="absolute  top-0  left-1/2 -translate-y-1/2 -translate-x-1/2 bg-surface-100 text-primary uppercase px-2 text-xs font-semibold">
                Or continue with
              </span>
            </div>

            <button className="w-full cursor-pointer py-3 text-lg text-primary font-semibold rounded-lg  bg-accent/5 hover:bg-accent/10 active:bg-accent/15 transition-all duration-150 inline-flex justify-center items-center gap-4 border-2 border-primary">
              <FcGoogle className="size-6" /> Google
            </button>

            <p className="text-center text-secondary text-sm">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="text-accent font-semibold hover:underline"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
