import React from "react";

function Button(props) {
  const { variant = "primary", children, ...rest } = props;

  const colors = {
    primary: "bg-blue-500",
    secondary: "bg-gray-300 !text-black",
    success: "bg-green-500",
    danger: "bg-red-500",
  };

  const color = colors[variant] || "bg-gray-500"; // Default fallback

  return (
    <button
      className={`px-8 py-4 text-white text-lg rounded-[30px] cursor-pointer ${color} hover:bg-sky-700`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
