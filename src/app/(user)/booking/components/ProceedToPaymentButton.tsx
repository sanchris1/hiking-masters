"use client";

import { useParticipantsStore } from "@/store/participantsStore";
import { useBookingStore } from "@/store/useBookingStore";
import axios from "axios";
import toast from "react-hot-toast";

const ProceedToPaymentButton = ({ expeditionId }: { expeditionId: string }) => {
  const { values, reset: resetBookingStore } = useBookingStore(
    (state) => state,
  );
  const { participants, reset: resetParticipants } = useParticipantsStore(
    (state) => state,
  );

  const formData = new FormData();

  formData.append("phoneNumber", values.phoneNumber);
  formData.append("participants", String(participants));
  formData.append("expeditionId", expeditionId);
  formData.append("gender", values.gender);
  formData.append("specialRequest", values.specialRequest);

  const handleCreateBooking = async () => {
    await axios
      .post("/api/expeditions/booking", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        toast.success(data.message);
        resetBookingStore();
        resetParticipants();
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          toast.error(
            error.response?.data.message || error.message || "Error booking",
          );
        }
      });
  };

  return (
    <button
      className="w-full bg-accent text-[15px] cursor-pointer rounded-xl font-medium text-surface-200  py-2   my-5"
      onClick={() => handleCreateBooking()}
    >
      Proceed to payment
    </button>
  );
};

export default ProceedToPaymentButton;
