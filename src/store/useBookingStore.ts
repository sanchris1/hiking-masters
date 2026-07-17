import { create } from "zustand";

interface BookingForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  specialRequest: string;
}

interface BookingStore {
  values: BookingForm;
  setField: <K extends keyof BookingForm>(
    field: K,
    value: BookingForm[K],
  ) => void;

  reset: () => void;
}

const initialValues: BookingForm = {
  fullName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  specialRequest: "",
};

export const useBookingStore = create<BookingStore>((set) => ({
  values: initialValues,

  setField: (field, value) =>
    set((state) => ({ values: { ...state.values, [field]: value } })),

  reset: () => set({ values: initialValues }),
}));
