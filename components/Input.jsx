import React from "react";

function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <input
      className="w-full bg-neutral-300 placeholder-white text-neutral-900 font-normal focus:border focus:border-neutral-500 focus:ring-0 rounded-md p-1 pl-3"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
}

export { Input };
