import { Save, User2 } from "lucide-react";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { ExpeditionFormValues } from "../new/page";

const ExpeditionPreview = ({
  setPreview,
  initialValues,
  preview,
  values,
  setValues,
}: {
  preview: string | null;
  values: typeof initialValues;
  setPreview: (preview: null | string) => void;
  initialValues: ExpeditionFormValues;
  setValues: (values: typeof initialValues) => void;
}) => {
  return (
    <div className="w-5/12  p-4   space-y-12 z-10 overflow-hidden sticky top-8">
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setPreview(null);
            setValues(initialValues);
          }}
          className="px-4 py-2 text-primary text-lg border-primary border-2 hover:bg-secondary/10 rounded-xl text-medium cursor-pointer "
        >
          Cancel
        </button>
        <button className="px-4 py-2 bg-primary text-surface-200  text-lg rounded-xl hover:text-white flex items-center gap-3">
          <Save className="size-5" />
          Save Expedition
        </button>
      </div>
      <div className="rounded-xl w-full shadow pb-5">
        <div className="w-full h-100 relative overflow-hidden">
          <Image
            alt="preview"
            fill
            className="object-cover rounded "
            src={!preview ? "/placeholder.jpg" : preview}
          />
        </div>
        <div className="mx-4 my-3 space-y-5">
          <div className="flex items-center justify-between ">
            <span className="">{values.category}</span>
            <span className="">{values.difficulty}</span>
          </div>
          <div className="">
            {" "}
            <h3 className="text-2xl font-medium text-primary leading-relaxed">
              {values.expeditionTitle}
            </h3>
            <span className="flex items-center gap-3 text-accent ">
              <SlCalender />{" "}
              {values.departureDate && (
                <span className="">
                  {" "}
                  {new Date(values.departureDate).toLocaleString("en-GD", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                </span>
              )}
              -{" "}
              {values.returnDate && (
                <span>
                  {" "}
                  {new Date(values.returnDate).toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                  })}{" "}
                </span>
              )}
            </span>
          </div>
          <div className="flex items-center justify-between">
            {values.price && (
              <div className="">
                <span className="text-sm text-secondary">Price</span>
                <p className="text-primary font-medium text-lg">
                  KSH: {values.price}
                </p>
              </div>
            )}
            {values.capacity && (
              <div className="">
                <span className="text-sm text-secondary">Slots</span>
                <p className="text-primary font-medium text-lg">
                  0 / {values.capacity}
                </p>
              </div>
            )}
          </div>

          <div className="w-full h-1 bg-accent rounded-full" />

          {values.guide && (
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center border rounded-full  p-1">
                <User2 className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-secondary">Guide</span>
                <span className="text-sm text-primary">{values.guide}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpeditionPreview;
