/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import InputComponent from "@/app/ui/Input";
import { Expedition } from "@/schema";
import { useBookingStore } from "@/store/useBookingStore";
import React, { useEffect } from "react";

const SpecialRequest = ({ exp }: { exp: Expedition }) => {
  const { values, setField, reset } = useBookingStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setField(name as keyof typeof values, value);
  };

  useEffect(() => {
    reset();
  }, [exp.id]);

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
