"use client";

import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { PiFinnTheHumanBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import ProceedToPaymentButton from "./ProceedToPaymentButton";
import Image from "next/image";
import { useParticipantsStore } from "@/store/participantsStore";
import { getExpeditionDetails } from "@/server-actions/getExpeditionDetails";

type ProceedToPaymentComponentProps = NonNullable<
  Awaited<ReturnType<typeof getExpeditionDetails>>
>;

const ProceedToPaymentComponent = ({
  expedition,
}: {
  expedition: ProceedToPaymentComponentProps;
}) => {
  const { participants } = useParticipantsStore((state) => state);

  return (
    <div className="w-full lg:w-3/8 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.2)]  overflow-hidden space-y-6 max-h-fit pb-7">
      {/* image */}
      <div className="w-full lg:h-80 md:h-100 h-120 relative overflow-hidden">
        <Image
          alt={expedition.expedition.title}
          src={expedition.expedition.image}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 space-y-4">
        <h3 className="text-2xl font-semibold text-primary tracking-wide leading-relaxed">
          {expedition.expedition.title}
        </h3>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
            <CiLocationOn /> {expedition.expedition.location}
          </span>
          <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
            <SlCalender />{" "}
            {new Date(expedition.expedition.departureDate).toLocaleString(
              "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              },
            )}
          </span>
          <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
            <PiFinnTheHumanBold /> {expedition.expedition.difficulty}
          </span>
          <span className="flex gap-2 bg-surface-200 px-2 py-0.5 rounded-2xl items-center text-xs text-primary font-semibold">
            <GoPeople />{" "}
            {expedition.expedition.capacity - expedition.expedition.slotsLeft}{" "}
            slot(s) taken | {expedition.expedition.slotsLeft} left
          </span>

          <div className="w-full h-0.5 rounded-full bg-primary " />

          <div className="flex items-center justify-between w-full text-secondary font-normal text-sm">
            Total Amount
            <span className="text-accent font-semibold text-xl ">
              KSH:{" "}
              {(expedition.expedition.price * participants).toLocaleString()}
            </span>
          </div>

          <div className="w-full h-0.5 rounded-full bg-primary my-1" />
          <ProceedToPaymentButton expeditionId={expedition.expedition.id} />
        </div>
      </div>
    </div>
  );
};

export default ProceedToPaymentComponent;
