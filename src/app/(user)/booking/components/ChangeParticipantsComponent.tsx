"use client";

import { Expedition } from "@/schema";
import { useParticipantsStore } from "@/store/participantsStore";
import { BiMinus, BiPlus } from "react-icons/bi";

const ChangeParticipantsComponent = ({ exp }: { exp: Expedition }) => {
  const { participants, incrementParticipants, decrementParticipants } =
    useParticipantsStore((state) => state);

  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-white border-border border px-2 py-1">
      <span className="text-sm font-semibold ">Participants</span>{" "}
      <div className="flex items-center gap-3">
        <button
          className="p-1 bg-surface-200 flex items-center justify-center  rounded-sm  text-text-accent"
          onClick={() => decrementParticipants()}
        >
          <BiMinus className="size-5" />
        </button>
        <span className="">{participants}</span>
        <button
          onClick={() => incrementParticipants(exp.capacity)}
          className="p-1 bg-surface-200 flex items-center justify-center  rounded-sm  text-text-accent"
        >
          <BiPlus className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ChangeParticipantsComponent;
