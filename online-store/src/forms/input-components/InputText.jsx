import React from 'react';

const InputText = ({ label, placeholder, register, name, error }) => {
  return (
    <div className="flex">
      <label className="w-1/3 self-center text-left">{label}</label>
      <div className="flex flex-col w-full items-start">
        <input
          {...register(name)}
          type="text"
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
          placeholder={placeholder}
        />
        {error && <p>{error.message}</p>}
      </div>
    </div>
  );
};

export default InputText;
