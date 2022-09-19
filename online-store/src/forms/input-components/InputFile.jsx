import React from 'react';

const InputFile = (props) => {
  return (
    <div className="flex flex-row">
      <label className="w-1/3 self-center text-left">{props.label}</label>
      <input
        type={props.type}
        className="
      form-control
      block
      w-2/3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      />
    </div>
  );
};

export default InputFile;
