import React from "react";

function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <input
      className="w-full bg-neutral-300 placeholder-white text-neutral-900 font-normal focus:border focus:border-neutral-500 focus:ring-0 rounded-md p-2 pl-3 file:bg-blue-700 file:text-white file:rounded-[4px] file:py-1 file:px-4 file:font-semibold file:text-sm file:float-right file:border-0 file:cursor-pointer"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
}

export { Input };
