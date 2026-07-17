"use client";
import { ExpeditionProps } from "./ExploreDetailsHero";
import { Minus, Plus } from "lucide-react";
import { BsShareFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useParticipantsStore } from "@/store/participantsStore";
import { useRouter } from "next/navigation";

const ExploreBookingCard = ({ expedition }: ExpeditionProps) => {
  const { participants, incrementParticipants, decrementParticipants } =
    useParticipantsStore((state) => state);

  const router = useRouter();

  return (
    <div className="w-full lg:w-5/12 rounded-2xl p-4 bg-primary space-y-12 lg:space-y-7 ">
      <div className="flex items-center justify-between">
        <div className="">
          <span className="uppercase text-sm text-green-500">Investment</span>
          <p className="text-surface-50 font-semibold text-2xl">
            KSH: {expedition.price.toLocaleString()}
          </p>
        </div>
        <div className="bg-accent text-white font-semibold text-[16px] px-4 py-2 rounded-2xl items-center flex justify-center animate-pulse">
          {expedition.slotsLeft} slots left
        </div>
      </div>
      <div className="flex items-center rounded-2xl bg-surface-50  justify-between p-4 flex-col sm:flex-row gap-5">
        <span className="text-[18px] text-secondary font-medium">
          Participants:
        </span>
        <div className="flex items-center gap-3">
          <button
            disabled={participants === 1}
            onClick={() => decrementParticipants()}
            className="border-2 hover:bg-primary/5 active:bg-primary/10 border-primary rounded-full p-2 disabled:opacity-70"
          >
            <Minus />
          </button>
          <span className="border border-border items-center justify-center flex text-lg rounded-md px-6  py-2 bg-primary text-surface-50">
            {participants}
          </span>
          <button
            className="border-2 hover:bg-primary/5 active:bg-primary/10 border-primary rounded-full p-2 disabled:opacity-50"
            disabled={participants === expedition.capacity}
            onClick={() => incrementParticipants(expedition.capacity)}
          >
            <Plus />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12">
        <button className="text-white flex items-center gap-3 text-[18px] active:bg-white/10 cursor-pointer hover:bg-white/5 font-semibold border-white border-2 px-5 py-1.5 rounded-xl">
          <FaRegHeart />
          wishlist
        </button>
        <button className="text-white flex items-center gap-3 text-[18px] active:bg-white/10 cursor-pointer hover:bg-white/5 font-semibold border-white border-2 px-5 py-1.5 rounded-xl">
          <BsShareFill />
          share
        </button>
      </div>
      <button
        onClick={() => router.push(`/booking/${expedition.id}`)}
        className="bg-accent px-6 py-2 text-sm font-semibold tracking-wider text-white rounded-xl cursor-pointer"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default ExploreBookingCard;
