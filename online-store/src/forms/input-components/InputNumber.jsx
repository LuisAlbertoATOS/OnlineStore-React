import React from "react";

const InputNumber = (props) => {
  return (
    <div className="flex flex-row">
      <label className="w-1/3 self-center">{props.label}</label>
      <input
        type={props.type}
        min={props.min}
        className="
      form-control
      block
      w-2/3
      px-3
      py-1.5
      my-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputNumber;
