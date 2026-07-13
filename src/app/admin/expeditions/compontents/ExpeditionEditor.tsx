/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import ExpeditionForm from "./ExpeditionForm";
import React, { useEffect, useState } from "react";
import { ExpeditionFormValues, FormField, InputEvent } from "../new/page";
import { MdDescription, MdOutlineEdit } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GiMoneyStack } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { BsImageAlt, BsUpload } from "react-icons/bs";
import ImageUploadComponent from "./ImageUploadComponent";
import ButtonLoading from "@/components/ButtonLoading";
import { UserWithDetails } from "@/types/types";
import axios from "axios";

const ExpeditionEditor = ({
  initialValues,
  preview,
  setPreview,
  values,
  setValues,
  mode,
  setImage,
  loading,
  createNewExpedition,
}: {
  mode: string;
  preview: string | null;
  values: typeof initialValues;
  createNewExpedition: () => void;
  loading: boolean;
  setValues: React.Dispatch<React.SetStateAction<ExpeditionFormValues>>;
  setPreview: (preview: null | string) => void;
  initialValues: ExpeditionFormValues;
  setImage: (file: File | null) => void;
}) => {
  //fetching the users
  const [guides, setGuides] = useState([]);

  const getGuides = async () => {
    const { data } = await axios.get("/api/users");
    const users = data?.users;

    const fetchedGuides = users
      .filter((user: UserWithDetails) => user.user.isGuide)
      .map((u: UserWithDetails) => ({
        label: u.user.name,
        value: u.user.id,
      }));

    setGuides(fetchedGuides);
  };

  useEffect(() => {
    getGuides();
  }, []);

  const inputDataBasicInformation: FormField[] = [
    {
      label: "Expedition Title",
      placeholder: "Enter expedition title",
      value: values.title,
      name: "title",
      type: "input",
      colSpan: 2,
    },
    {
      label: "Tagline",
      placeholder: "The tagline",
      value: values.tagline,
      name: "tagline",
      type: "input",
      colSpan: 2,
    },
    {
      label: "Location",
      placeholder: "Location",
      value: values.location,
      name: "location",
      type: "input",
      colSpan: 1,
    },
    {
      label: "Difficulty",
      placeholder: "Select difficulty",
      value: values.difficulty,
      name: "difficulty",
      type: "select",
      colSpan: 1,
      options: [
        { label: "Easy", value: "easy" },
        { label: "Moderate", value: "moderate" },
        { label: "Difficult", value: "difficult" },
        { label: "Extreme", value: "extreme" },
      ],
    },
    {
      label: "Status",
      placeholder: "Select status",
      value: values.status,
      name: "status",
      type: "select",
      colSpan: 1,
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
        { label: "Open for Booking", value: "open" },
        { label: "Fully Booked", value: "full" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
    },
    {
      label: "Categories",
      placeholder: "Select category",
      value: values.category,
      name: "category",
      type: "select",
      colSpan: 1,
      options: [
        { label: "Mountain Trek", value: "mountain-trek" },
        { label: "Nature Hike", value: "nature-hike" },
        { label: "Camping Expedition", value: "camping-expedition" },
        { label: "Rock Climbing", value: "rock-climbing" },
        { label: "Forest Trail", value: "forest-trail" },
        { label: "Waterfall Hike", value: "waterfall-hike" },
        { label: "Summit Challenge", value: "summit-challenge" },
        { label: "Weekend Getaway", value: "weekend-getaway" },
        { label: "Multi-day Expedition", value: "multi-day-expedition" },
        { label: "Team Building", value: "team-building" },
        { label: "Photography Tour", value: "photography-tour" },
        { label: "Family Adventure", value: "family-adventure" },
      ],
    },
  ];

  const scheduleDataInformation: FormField[] = [
    {
      label: "Departure dates ",
      placeholder: "Departure dates",
      value: values.departureDate,
      name: "departureDate",
      type: "date",
      colSpan: 1,
    },
    {
      label: "Return dates ",
      placeholder: "Return dates",
      value: values.returnDate,
      name: "returnDate",
      type: "date",
      colSpan: 1,
    },
    {
      label: "Meeting time ",
      placeholder: "Meeting time",
      value: values.meetingTime,
      name: "meetingTime",
      type: "time",
      colSpan: 1,
    },
    {
      label: "Departure time ",
      placeholder: "Departure time",
      value: values.departureTime,
      name: "departureTime",
      type: "time",
      colSpan: 1,
    },
    {
      label: "Return time ",
      placeholder: "Return time",
      value: values.returnTime,
      name: "returnTime",
      type: "time",
      colSpan: 1,
    },
  ];

  const pricingCapacityInformation: FormField[] = [
    {
      label: "Capacity",
      placeholder: "",
      value: values.capacity,
      name: "capacity",
      type: "number",
      colSpan: 1,
    },
    {
      label: "Price",
      placeholder: "",
      value: values.price,
      name: "price",
      type: "number",
      colSpan: 1,
    },
  ];

  const logisticsAndPersonnelInformation: FormField[] = [
    {
      label: "Guide",
      placeholder: "Select Guide",
      value: values.guide,
      name: "guide",
      type: "select",
      colSpan: 1,
      options: guides,
    },
    {
      label: "Meeting point",
      placeholder: "Meeting Point",
      value: values.meetingPoint,
      name: "meetingPoint",
      type: "input",
      colSpan: 1,
    },
    {
      label: "Guide contact",
      placeholder: "",
      value: values.contact,
      name: "contact",
      type: "number",
      colSpan: 1,
    },
  ];

  const descriptionAndContentInformation: FormField[] = [
    {
      label: "Full description",
      placeholder: "Describe the journey in details",
      value: values.description,
      name: "description",
      type: "textarea",
      colSpan: 2,
    },
  ];

  const handleInputChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="w-7/12 mx-auto min-h-screen  rounded-2xl p-4 ">
      <div className="">
        <h2 className="text-3xl font-semibold text-primary leading-relaxed tracking-wide">
          {mode === "creating" ? "Create New Expedition" : "Edit Expedition"}
        </h2>
        <p className="text-secondary ">
          {mode === "creating"
            ? "        Fill in the expedition details below to publish new hiking experience"
            : "Please  edit the needful fields "}
        </p>
      </div>
      <form className=" mt-5 space-y-8">
        <div className="p-4 bg-surface-200 rounded-2xl  space-y-4">
          <h3 className="text-2xl font-medium text-primary  flex items-center gap-3">
            <MdOutlineEdit /> Basic information
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {inputDataBasicInformation.map((info) => (
              <div
                className={`${info.colSpan === 2 ? "col-span-2" : ""}`}
                key={info.label}
              >
                <ExpeditionForm
                  label={info.label}
                  placeholder={info.placeholder}
                  value={values[info.name as keyof typeof values]}
                  name={info.name}
                  type={info.type}
                  onChange={handleInputChange}
                  options={info.options}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-surface-200 rounded-2xl  space-y-4">
          <h3 className="text-2xl font-medium text-primary  flex items-center gap-3">
            <SlCalender /> Schedule
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {scheduleDataInformation.map((info) => (
              <div
                className={`${info.colSpan === 2 ? "col-span-2" : ""}`}
                key={info.label}
              >
                <ExpeditionForm
                  label={info.label}
                  placeholder={info.placeholder}
                  value={values[info.name as keyof typeof values]}
                  name={info.name}
                  type={info.type}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-surface-200 rounded-2xl  space-y-4">
          <h3 className="text-2xl font-medium text-primary  flex items-center gap-3">
            <GiMoneyStack /> Capacity and Pricing
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {pricingCapacityInformation.map((info) => (
              <div
                className={`${info.colSpan === 2 ? "col-span-2" : ""}`}
                key={info.label}
              >
                <ExpeditionForm
                  label={info.label}
                  placeholder={info.placeholder}
                  value={values[info.name as keyof typeof values]}
                  name={info.name}
                  type={info.type}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-surface-200 rounded-2xl  space-y-4">
          <h3 className="text-2xl font-medium text-primary  flex items-center gap-3">
            <CgOrganisation /> Logistics and Personnel
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {logisticsAndPersonnelInformation.map((info) => (
              <div
                className={`${info.colSpan === 2 ? "col-span-2" : ""}`}
                key={info.label}
              >
                <ExpeditionForm
                  label={info.label}
                  placeholder={info.placeholder}
                  value={values[info.name as keyof typeof values]}
                  name={info.name}
                  type={info.type}
                  onChange={handleInputChange}
                  options={info.options}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-surface-200 rounded-2xl  space-y-4">
          <h3 className="text-2xl font-medium text-primary  flex items-center gap-3">
            <MdDescription /> Description and Content
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {descriptionAndContentInformation.map((info) => (
              <div
                className={`${info.colSpan === 2 ? "col-span-2" : ""}`}
                key={info.label}
              >
                <ExpeditionForm
                  label={info.label}
                  placeholder={info.placeholder}
                  value={values[info.name as keyof typeof values]}
                  name={info.name}
                  type={info.type}
                  onChange={handleInputChange}
                  options={info.options}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 bg-surface-200 rounded-2xl  space-y-4">
          <h3 className="text-2xl font-medium text-primary  flex items-center gap-3">
            <BsImageAlt /> Image
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <ImageUploadComponent
              handleImageChange={handleImageChange}
              preview={preview}
            />
          </div>
        </div>
        <div className="flex items-center justify-between my-5">
          <button
            type="button"
            className="px-4 py-2 text-primary text-lg border-primary border-2 hover:bg-secondary/10 rounded-xl text-medium cursor-pointer "
            onClick={() => setValues(initialValues)}
          >
            Discard
          </button>
          <button
            type="button"
            onClick={() =>
              mode === "creating" ? createNewExpedition() : console.log(`sam`)
            }
            className="px-4 py-2 bg-accent text-surface-200  text-lg rounded-xl hover:text-white flex items-center gap-3"
          >
            {loading ? (
              <ButtonLoading />
            ) : mode === "creating" ? (
              <>
                {" "}
                <BsUpload /> Publish Expedition
              </>
            ) : (
              "Submit edited Expedition"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpeditionEditor;
