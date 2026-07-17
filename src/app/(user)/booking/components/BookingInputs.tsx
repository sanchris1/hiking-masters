"use client";

import InputComponent from "@/app/ui/Input";
import { useBookingStore } from "@/store/useBookingStore";

const BookingInputs = () => {
  const { values, setField } = useBookingStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setField(name as keyof typeof values, value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <InputComponent
        label="Fullname"
        name="fullName"
        placeholder="Enter your full name"
        value={values.fullName}
        onChange={handleChange}
        as="input"
        className=""
      />
      <InputComponent
        label="Email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        as="input"
        className=""
      />
      <InputComponent
        label="Phone number"
        name="phoneNumber"
        placeholder="Enter your phone number"
        value={values.phoneNumber}
        type="number"
        onChange={handleChange}
        as="input"
        className=""
      />
      <div className="flex w-full justify-center items-start  flex-col">
        <span className="  text-secondary text-sm">Gender</span>
        <div className="flex gap-5">
          <div className=" flex items-center gap-3">
            <label
              htmlFor="male-gender"
              className="text-primary font-semibold tracking-wide"
            >
              Male
            </label>
            <input
              type="radio"
              id="male-gender"
              name="gender"
              checked={values.gender === "Male"}
              value="Male"
              onChange={(e) => setField("gender", e.target.value)}
            />
          </div>
          <div className=" flex items-center gap-3">
            <label
              className="text-primary font-semibold tracking-wide"
              htmlFor="female-gender"
            >
              Female
            </label>
            <input
              type="radio"
              id="female-gender"
              name="gender"
              checked={values.gender === "Female"}
              value="Female"
              onChange={(e) => setField("gender", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInputs;
