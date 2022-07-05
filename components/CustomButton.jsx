import React from "react";

function CustomButton({ color, radius, id, label, loading, onClick }) {
  const mystyle = {
    backgroundColor: color,
    borderRadus: radius,
  };
  return (
    <button
      id={id}
      className={`bg-blue-700 text-white font-bold py-2 px-4 rounded-sm ${
        loading && "bg-gray-700 cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={loading}
      style={mystyle}
    >
      {label}
    </button>
  );
}

export default CustomButton;
