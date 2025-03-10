import React from "react";

export default function Input(props) {
  const { size = "medium", ...rest } = props;

  const values = {
    small: "h-[2rem] text-[0.875rem]",
    medium: "h-[2.5rem] text-[1rem]",
    success: "h-[3rem] text-[1.25rem]",
  };

  const value = values[size] || ""; // Default fallback

  return (
    <input
      className={`text-[2rem] block w-[400px] px-4 rounded-[0.25rem] bg-black text-white border-inherit ${value}`}
      {...rest}
    />
  );
}
