import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  className,
  disabled,
  type,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "btn rounded-lg btn-lg btn-soft bg-green-500 text-white font-normal text-base border-none",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}
