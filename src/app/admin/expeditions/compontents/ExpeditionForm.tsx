import { InputEvent } from "../new/page";

export type FormFieldType =
  | "input"
  | "textarea"
  | "select"
  | "radial"
  | "date"
  | "number"
  | "time";

export interface SelectOptions {
  label: string;
  value: string;
}

interface ExpeditionFormProps {
  label: string;
  name: string;
  mode: "editing" | "creating";
  placeholder: string;
  type: FormFieldType;
  value: string;
  options?: SelectOptions[];
  onChange: (e: InputEvent) => void;
}

const ExpeditionForm = ({
  label,
  placeholder,
  type,
  value,
  name,
  options,
  onChange,
}: ExpeditionFormProps) => {
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDates = today.toISOString().split("T").at(0);

  return (
    <div className="flex flex-col  p-2">
      <div className="space-y-1 flex flex-col w-full px-12">
        <label className="text-sm text-secondary font-semibold tracking-wide">
          {label}
        </label>
        {type === "input" && (
          <input
            className="w-full px-6 py-3 border border-secondary outline-none rounded-xl bg-surface-200 font-medium"
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
        {type === "select" && (
          <select
            name={name}
            onChange={onChange}
            value={value}
            className="px-6 py-3 w-full outline-none bg-secondary/10 border-secondary border-2 rounded-2xl text-primary font-medium  "
          >
            <option value="">{placeholder}</option>
            {options &&
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        )}

        {type === "date" && (
          <input
            min={minDates}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            type="date"
            className="px-6 py-3 w-full outline-none bg-secondary/10 border-secondary border-2 rounded-2xl text-primary font-medium  "
          />
        )}
        {type === "time" && (
          <input
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            type="time"
            className="px-6 py-3 w-full outline-none bg-secondary/10 border-secondary border-2 rounded-2xl text-primary font-medium  "
          />
        )}
        {type === "number" && (
          <input
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            type="number"
            className="px-6 py-3 w-full outline-none bg-secondary/10 border-secondary border-2 rounded-2xl text-primary font-medium  "
          />
        )}
        {type === "textarea" && (
          <textarea
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            className="px-4 py-3 w-full outline-none bg-secondary/10 border-secondary border-2 rounded-2xl text-primary font-medium   h-40 resize-none"
          />
        )}
      </div>
    </div>
  );
};

export default ExpeditionForm;
