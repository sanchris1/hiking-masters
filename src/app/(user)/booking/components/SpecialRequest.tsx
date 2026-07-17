"use client";

import InputComponent from "@/app/ui/Input";
import { useBookingStore } from "@/store/useBookingStore";
import React from "react";

const SpecialRequest = () => {
  const { values, setField } = useBookingStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setField(name as keyof typeof values, value);
  };

  return (
    <InputComponent
      as="textarea"
      label="Special request"
      placeholder="Comment or special request"
      name="specialRequest"
      value={values.specialRequest}
      onChange={handleChange}
    />
  );
};

export default SpecialRequest;
