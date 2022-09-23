import React from "react";
import Errors from "../../components/Errors";

const InputSelect = ({
  label,
  select,
  children,
  register,
  name,
  error,
  value,
}) => {
  return (
    <div className="flex flex-row">
      <label className="w-1/3 self-center text-left">{label}</label>
      <div className="flex flex-col w-full items-start">
        <select
          {...register(name)}
          value={value}
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
        >
          {children}
        </select>
        {error && <Errors message={error.message}/>}
      </div>
    </div>
  );
};

export default InputSelect;
