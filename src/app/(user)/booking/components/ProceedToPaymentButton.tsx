"use client";

import ButtonLoading from "@/components/ButtonLoading";
import { useParticipantsStore } from "@/store/participantsStore";
import { useBookingStore } from "@/store/useBookingStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ProceedToPaymentButton = ({
  isBooked,
  expeditionId,
}: {
  expeditionId: string;
  isBooked: boolean;
}) => {
  const { values, reset: resetBookingStore } = useBookingStore(
    (state) => state,
  );
  const { participants, reset: resetParticipants } = useParticipantsStore(
    (state) => state,
  );

  const formData = new FormData();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  formData.append("phoneNumber", values.phoneNumber);
  formData.append("participants", String(participants));
  formData.append("expeditionId", expeditionId);
  formData.append("gender", values.gender);
  formData.append("specialRequest", values.specialRequest);

  const handleCreateBooking = async () => {
    setLoading(true);
    await axios
      .post("/api/expeditions/booking", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        toast.success(data.message);
        resetBookingStore();
        resetParticipants();
        router.push(`/checkout/${expeditionId}`);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          toast.error(
            error.response?.data.message || error.message || "Error booking",
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <button
      className="w-full bg-accent text-[15px] cursor-pointer rounded-xl font-medium text-surface-200  py-2   my-5"
      onClick={
        isBooked
          ? () => router.push(`/checkout/${expeditionId}`)
          : () => handleCreateBooking()
      }
    >
      {loading ? (
        <ButtonLoading />
      ) : isBooked ? (
        "Booked - Click to Pay"
      ) : (
        "Proceed to checkout"
      )}
    </button>
  );
};

export default ProceedToPaymentButton;
