"use client";

import { useState } from "react";
import { FormFieldType, SelectOptions } from "../compontents/ExpeditionForm";
import ExpeditionPreview from "../compontents/ExpeditionPreview";
import ExpeditionEditor from "../compontents/ExpeditionEditor";

export type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

export interface ExpeditionFormValues {
  expeditionTitle: string;
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
  fullDescription: string;
  image: string;
}

const initialValues: ExpeditionFormValues = {
  expeditionTitle: "",
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
  capacity: "",
  price: "",
  guide: "",
  meetingPoint: "",
  contact: "",
  fullDescription: "",
  image: "",
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

  return (
    <div className="m-3">
      <div className="flex items-start gap-4">
        {/* left  creating bew*/}

        <ExpeditionEditor
          mode="creating"
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
