"use client";

import { twMerge } from "tailwind-merge";

interface SelectFieldDataInterface {
  value: string;
  name: string;
}
interface SelectFieldProps {
  label: string;
  name: string;
  data: SelectFieldDataInterface[];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}
export default function SelectField({
  label,
  name,
  data,
  onClick,
  disabled,
  className,
  icon,
}: SelectFieldProps) {
  return (
    <>
      <div>
        <label className="label pb-0">
          <span className="label-text">{label}</span>
        </label>
        <div
          className={twMerge(
            "select select-lg rounded-lg select-bordered flex items-center gap-2 w-full focus-within:outline-none  focus-within:border-gray-300",
            className
          )}
        >
          <span className="h-5 opacity-70 text-xl">{icon}</span>

          <select
            name={name}
            className="grow w-full text-base pt"
            disabled={disabled}
            onClick={onClick}
          >
            {data.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
