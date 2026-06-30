import { InputHTMLAttributes } from "react";

interface InputComponentProps {
  placeholder: string;
  as: "input" | "textarea";
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

type InputProps = InputComponentProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = InputComponentProps &
  InputHTMLAttributes<HTMLTextAreaElement>;

const InputComponent = ({
  placeholder,
  as = "input",
  name,
  value,
  onChange,
}: InputProps | TextareaProps) => {
  return (
    <div className="w-full">
      <div className="">
        {as === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-surface-50 outline-none rounded-xl px-5  text-secondary text-sm placeholder:text-gray-500 h-32 resize-none py-3"
          />
        ) : (
          <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-surface-50 outline-none rounded-xl px-5 py-4 text-secondary text-sm placeholder:text-gray-500"
          />
        )}
      </div>
    </div>
  );
};

export default InputComponent;
