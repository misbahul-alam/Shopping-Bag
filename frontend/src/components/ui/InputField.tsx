// import React from "react";
// import { MdEmail } from "react-icons/md";

// export default function InputField() {
//   return (
//     <div>
//       <label htmlFor="" className="text-gray-700 text-sm font-light">
//         Email Address
//       </label>
//       <div className="flex items-center bg-gray-100 h-11 rounded-md px-2">
//         <MdEmail className="text-gray-600 text-2xl" />
//         <input
//           type="text"
//           placeholder="Email Address"
//           className="outline-none px-2 w-full"
//         />
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
interface InputFieldProps {
  label: string;
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  require?: boolean;
  icon?: React.ReactNode;
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
}

export default function InputField({
  label,
  name,
  className,
  onClick,
  icon,
  require = false,
  disabled,
  type = "text",
}: InputFieldProps) {
  const [show, setShow] = useState(false);
  const [types, setTypes] = useState(type);

  const toggle = () => {
    setShow(!show);
    if (types === "password") {
      setTypes("text");
    } else {
      setTypes("password");
    }
  };

  useEffect(() => {
    if (type != "password") {
      setTypes(type);
    }
  }, [type]);

  return (
    <div>
      <label className="label pb-0">
        <span className="label-text">{label}</span>
      </label>
      <div
        className={twMerge(
          "input input-lg rounded-lg input-bordered flex items-center gap-2 w-full focus-within:outline-none  focus-within:border-gray-200 border-gray-200 bg-gray-50",
          className
        )}
      >
        <span className="h-5 opacity-70 text-xl">{icon}</span>

        <input
          type={types ?? "text"}
          name={name ?? "text"}
          className="grow w-full text-base"
          placeholder={label}
          onClick={onClick}
          required={require}
          disabled={disabled}
        />
        {type === "password" &&
          (show ? (
            <HiEyeOff
              className="h-5 opacity-70 text-xl cursor-pointer"
              onClick={toggle}
            />
          ) : (
            <HiEye
              className="h-5 opacity-70 text-xl cursor-pointer"
              onClick={toggle}
            />
          ))}
      </div>
    </div>
  );
}
