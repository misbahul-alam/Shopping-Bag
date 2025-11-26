"use client";
import { twMerge } from "tailwind-merge";
interface TextFieldProps {
  label: string;
  name: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  require?: boolean;
  icon?: React.ReactNode;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
}

export default function TextArea({
  label,
  name,
  onClick,
  className,
  icon,
  require = false,
  disabled,
  type = "text",
}: TextFieldProps) {
  return (
    <div>
      <label className="label pb-0">
        <span className="label-text">{label}</span>
      </label>
      <div
        className={twMerge(
          "textarea input-lg rounded-lg input-bordered flex items-start gap-2 w-full focus-within:outline-none  focus-within:border-gray-300 ",
          className
        )}
      >
        <span className="h-5 opacity-70 text-xl">{icon}</span>

        <textarea
          name={name}
          className="grow w-full text-base resize-none "
          rows={6}
          placeholder={label}
          onClick={onClick}
          required={require}
          disabled={disabled}
        ></textarea>
      </div>
    </div>
  );
}
