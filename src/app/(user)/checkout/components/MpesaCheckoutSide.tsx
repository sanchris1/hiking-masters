"use client";

import { getCurrentBookingExpeditionsDetails } from "@/server-actions/getCurrentBookingExpeditionDetails";
import React, { useState } from "react";

export type MpesaCheckoutSideProps = NonNullable<
  Awaited<ReturnType<typeof getCurrentBookingExpeditionsDetails>>
>;

const MpesaCheckoutSide = ({
  bookedExpedition,
}: {
  bookedExpedition: MpesaCheckoutSideProps;
}) => {
  const [number, setNumber] = useState("");

  if (!bookedExpedition.booking) return null;

  return (
    <div className="lg:col-span-4 col-span-1 p-5 shadow bg-white rounded-2xl h-fit">
      <h3 className="text-2xl font-semibold text-primary tracking-wide leading-relaxed">
        Payment
      </h3>
      <div className="border-primary border-2  p-3 bg-surface-100 rounded-xl space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-green-600 rounded text-sm font-bold p-2 flex items-center justify-center text-white">
            M
          </div>{" "}
          <span className="uppercase text-sm font-semibold text-primary">
            M-pesa
          </span>
        </div>

        <div className="space-y-1.5">
          <label className="">Phone Number (M-Pesa Registered)</label>
          <input
            value={number}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNumber(event.target.value)
            }
            placeholder="07xxxxxxxx"
            type="number"
            className="w-full py-2 px-3 bg-white rounded-xl border border-secondary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span className="">
            A push notification will be sent to this number
          </span>
        </div>
        <button className="w-full py-3 font-bold text-[18px] rounded-2xl text-white  bg-accent">
          Pay KSH:{" "}
          {(
            bookedExpedition.expedition.price *
            bookedExpedition.booking.participants
          ).toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default MpesaCheckoutSide;
