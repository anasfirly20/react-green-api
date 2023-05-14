import React from "react";

const Input = ({ label, onChange, value, name }) => {
  return (
    <div className="grid gap-1">
      <label className="ml-1">{label}</label>
      <input
        type="text"
        className="py-2 pl-3 text-customBlack outline-none rounded-lg"
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
