/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getExpeditionDetails } from "@/server-actions/getExpeditionDetails";
import { useParticipantsStore } from "@/store/participantsStore";
import { useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

type ChangeParticipantsComponentProps = NonNullable<
  Awaited<ReturnType<typeof getExpeditionDetails>>
>;

const ChangeParticipantsComponent = ({
  exp,
}: {
  exp: ChangeParticipantsComponentProps;
}) => {
  const { participants, incrementParticipants, decrementParticipants, reset } =
    useParticipantsStore((state) => state);

  useEffect(() => {
    reset();
  }, [exp.expedition.id]);

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
          onClick={() => incrementParticipants(exp.expedition.slotsLeft)}
          className="p-1 bg-surface-200 flex items-center justify-center  rounded-sm  text-text-accent"
        >
          <BiPlus className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ChangeParticipantsComponent;
