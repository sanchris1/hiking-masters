"use client";

import { useState } from "react";
import { FormFieldType, SelectOptions } from "../compontents/ExpeditionForm";
import ExpeditionPreview from "../compontents/ExpeditionPreview";
import ExpeditionEditor from "../compontents/ExpeditionEditor";
import toast from "react-hot-toast";
import axios from "axios";

export type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

export interface ExpeditionFormValues {
  title: string;
  tagline: string;
  location: string;
  difficulty: string;
  status: string;
  category: string;
  departureDate: string;
  returnDate: string;
  meetingTime: string;
  departureTime: string;
  duration: string;
  registrationDeadlines: string;
  capacity: string;
  price: string;
  guide: string;
  meetingPoint: string;
  contact: string;
  description: string;
  distanceFromNairobi: string;
  returnTime: string;
}

const initialValues: ExpeditionFormValues = {
  title: "",
  tagline: "",
  location: "",
  difficulty: "",
  status: "",
  category: "",
  departureDate: "",
  returnDate: "",
  meetingTime: "",
  departureTime: "",
  duration: "",
  registrationDeadlines: "",
  distanceFromNairobi: "",
  capacity: "",
  price: "",
  guide: "",
  meetingPoint: "",
  contact: "",
  description: "",
  returnTime: "",
};

export interface FormField {
  label: string;
  placeholder: string;
  name: keyof typeof initialValues;
  type: FormFieldType;
  colSpan: 1 | 2;
  value: string;
  options?: SelectOptions[];
}

const AddNewExpeditionsPage = () => {
  const [preview, setPreview] = useState<null | string>(null);
  const [values, setValues] = useState(initialValues);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function createNewExpedition() {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("tagline", values.tagline);
      formData.append("departureDate", values.departureDate);
      formData.append("guideId", values.guide);
      formData.append("returnDate", values.returnDate);
      formData.append("difficulty", values.difficulty);
      formData.append("price", values.price.toString());
      formData.append("capacity", values.capacity.toString());
      formData.append("category", values.category);
      formData.append("status", values.status);
      formData.append("description", values.description);
      formData.append("location", values.location);
      formData.append(
        "distanceFromNairobi",
        values.distanceFromNairobi.toString(),
      );
      formData.append("meetingTime", values.meetingTime);
      formData.append("departureTime", values.departureTime);
      formData.append("returnTime", values.returnTime);
      formData.append("meetingPoint", values.meetingPoint);
      formData.append("contact", values.contact);

      if (image) {
        formData.append("image", image);
      }

      await axios.post("/api/expeditions", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Property added successfully");
      setValues(initialValues);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error || "Something went wrong");
        return;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="m-3">
      <div className="flex items-start gap-4">
        {/* left  creating bew*/}

        <ExpeditionEditor
          mode="creating"
          loading={loading}
          createNewExpedition={createNewExpedition}
          setImage={setImage}
          initialValues={initialValues}
          preview={preview}
          setPreview={setPreview}
          values={values}
          setValues={setValues}
        />

        {/* right  preview*/}
        <ExpeditionPreview
          setValues={setValues}
          values={values}
          initialValues={initialValues}
          preview={preview}
          setPreview={setPreview}
        />
      </div>
    </div>
  );
};

export default AddNewExpeditionsPage;
