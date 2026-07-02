/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import InputComponent from "@/app/ui/Input";
import { dummyUpcomingExpeditions } from "@/items/experditions";
import { UpcomingExpedition } from "@/types/types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiMinus, BiPlus } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiFinnTheHumanBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const BookingPage = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    participants: 1,
    specialRequest: "",
  };
  const { hikeId } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!hikeId || hikeId === "no-hike") {
      setTimeout(() => router.push("/explore"), 2000);
    }
  }, [hikeId]);

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [expedition, setExpedition] = useState<UpcomingExpedition | null>(null);

  useEffect(() => {
    const hike =
      dummyUpcomingExpeditions.find((exp) => exp.id === hikeId) ?? null;

    setExpedition(hike);
  }, [hikeId]);

  if (!hikeId || hikeId === "no-hike") {
    return (
      <div className="flex items-center justify-center w-full h-full min-h-screen flex-col space-y-5">
        <h2 className="text-center font-bold text-primary text-5xl">
          No hike has been selected.
        </h2>
        <p className="text-secondary text-lg font-medium">
          Please select some hike to book your session
        </p>
        <button
          onClick={() => router.push("/explore")}
          className="bg-accent px-8 text-surface-100 rounded font-medium py-2 cursor-pointer"
        >
          Explore Expeditions
        </button>
      </div>
    );
  }

  if (!expedition) return null;
  const handleChangeParticipants = (func: string) => {
    setValues((prev) => ({
      ...prev,
      participants:
        func === "minus" && values.participants > 1
          ? values.participants--
          : func === "minus" && values.participants === 1
            ? (values.participants = 1)
            : values.participants++,
    }));
  };

  return (
    <section className="bg-white w-full ">
      <div className="p-5  max-w-6xl mx-auto bg-surface-50/5 flex flex-col lg:flex-row gap-8 ">
        <div className="w-full lg:w-5/8 ">
          <button
            className="p-2 text-surface-50 rounded-full bg-primary/80"
            onClick={() => router.back()}
          >
            <BiArrowBack />
          </button>
          <h2 className="text-3xl font-semibold text-primary leading-relaxed tracking-wide">
            Complete your booking
          </h2>
          <p className="text-sm  text-secondary">
            You&apos;re just one step away from your next adventure
          </p>
          <div className="my-12 space-y-5">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-4 flex items-center justify-center  rounded-full bg-primary text-[10px] font-medium p-0.5 text-surface-50 ">
                01
              </span>
              <span className="font-medium text-sm text-primary">
                Personal information
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputComponent
                label="Fullname"
                name="fullName"
                placeholder="Enter your full name"
                value={values.fullName}
                onChange={handleChange}
                as="input"
                className=""
              />
              <InputComponent
                label="Email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                as="input"
                className=""
              />
              <InputComponent
                label="Phone number"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={values.phoneNumber}
                type="number"
                onChange={handleChange}
                as="input"
                className=""
              />
              <div className="flex w-full justify-center items-start  flex-col">
                <span className="  text-secondary text-sm">Gender</span>
                <div className="flex gap-5">
                  <div className=" flex items-center gap-3">
                    <label
                      htmlFor="male-gender"
                      className="text-primary font-semibold tracking-wide"
                    >
                      Male
                    </label>
                    <input
                      type="radio"
                      id="male-gender"
                      name="gender"
                      checked={values.gender === "Male"}
                      value="Male"
                      onChange={(e) =>
                        setValues({ ...values, gender: e.target.value })
                      }
                    />
                  </div>
                  <div className=" flex items-center gap-3">
                    <label
                      className="text-primary font-semibold tracking-wide"
                      htmlFor="female-gender"
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      id="female-gender"
                      name="gender"
                      checked={values.gender === "Female"}
                      value="Female"
                      onChange={(e) =>
                        setValues({ ...values, gender: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-12 space-y-8">
            <div className="flex gap-3 items-center">
              <span className="w-5 h-4 flex items-center justify-center  rounded-full bg-primary text-[10px] font-medium p-0.5 text-surface-50 ">
                02
              </span>
              <span className="font-medium text-sm text-primary">
                Trip Information
              </span>
            </div>
            <div className="bg-surface-100 p-5 rounded-xl">
              <div className="grid grid-cols-4 ">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Departure
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {new Date(expedition.departureDate).toLocaleString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Duration
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {expedition.duration}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Difficulty
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {expedition.difficulty}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary tracking-tight">
                    Guide
                  </span>
                  <p className="font-semibold text-[15px] text-primary">
                    {expedition.guide}
                  </p>
                </div>
              </div>
              <div className="my-3 w-full h-0.5 bg-accent rounded-full " />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-secondary tracking-tight">
                      Meeting point
                    </span>
                    <p className="font-semibold text-[15px] text-primary">
                      {expedition.meetingPoint}
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-white border-border border px-2 py-1">
                    <span className="text-sm font-semibold ">Participants</span>{" "}
                    <div className="flex items-center gap-3">
                      <button
                        className="p-1 bg-surface-200 flex items-center justify-center  rounded-sm  text-text-accent"
                        onClick={() => handleChangeParticipants("minus")}
                      >
                        <BiMinus className="size-5" />
                      </button>
                      <span className="">{values.participants}</span>
                      <button
                        onClick={() => handleChangeParticipants("plus")}
                        className="p-1 bg-surface-200 flex items-center justify-center  rounded-sm  text-text-accent"
                      >
                        <BiPlus className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <InputComponent
                  as="textarea"
                  label="Special request"
                  placeholder="Comment or special request"
                  name="specialRequest"
                  value={values.specialRequest}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.2)]  overflow-hidden space-y-6">
          {/* image */}
          <div className="w-full lg:h-80 md:h-100 h-120 relative overflow-hidden">
            <Image
              alt={expedition.title}
              src={expedition.image}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-4 space-y-4">
            <h3 className="text-2xl font-semibold text-primary tracking-wide leading-relaxed">
              {expedition.title}
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <CiLocationOn /> {expedition.location}
              </span>
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <SlCalender />{" "}
                {new Date(expedition.departureDate).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <PiFinnTheHumanBold /> {expedition.difficulty}
              </span>
              <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
                <GoPeople /> {expedition.capacity - expedition.slotsLeft} slots
                taken | {expedition.slotsLeft} left
              </span>

              <div className="w-full h-0.5 rounded-full bg-primary " />
              <h5 className="text-sm font-medium text-secondary tracking-wider">
                Price Summary
              </h5>
              <div className="flex items-center justify-between w-full text-secondary text-sm">
                Entry fee{" "}
                <span className="text-accent font-medium ">
                  {expedition.costBreakdown.entryFee.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between w-full text-secondary text-sm">
                Transport{" "}
                <span className="text-accent font-medium ">
                  {expedition.costBreakdown.transport.toLocaleString()}
                </span>
              </div>
              {expedition.costBreakdown.accommodation && (
                <div className="flex items-center justify-between w-full text-secondary text-sm">
                  Accommodation
                  <span className="text-accent font-medium ">
                    {expedition.costBreakdown.accommodation?.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between w-full text-secondary text-sm">
                Means
                <span className="text-accent font-medium ">
                  {expedition.costBreakdown.meals.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between w-full text-secondary text-sm">
                Guide fee
                <span className="text-accent font-medium ">
                  {expedition.costBreakdown.guideFee.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between w-full text-secondary text-sm">
                Taxes and levies
                <span className="text-accent font-medium ">
                  {expedition.costBreakdown.taxesAndLevies.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between w-full text-secondary text-sm">
                Other
                <span className="text-accent font-medium ">
                  {expedition.costBreakdown.other.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-0.5 rounded-full bg-primary my-1" />
              <div className="flex items-center justify-between w-full text-secondary font-normal text-sm">
                Total Amount
                <span className="text-accent font-semibold text-xl ">
                  {expedition.price.toLocaleString()}
                </span>
              </div>

              <div className="w-full h-0.5 rounded-full bg-primary my-1" />
              <button className="w-full bg-accent text-[15px] cursor-pointer rounded-xl font-medium text-surface-200  py-2   my-5">
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
