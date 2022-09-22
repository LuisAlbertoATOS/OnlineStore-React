import React from 'react';
import Errors from '../../components/Errors';

const InputFile = ({ label, type, register, name, error }) => {
  return (
    <div className="flex flex-row">
      <label className="w-1/3 self-center text-left">{label}</label>
      <div className="flex flex-col w-full items-start">
        <input
          {...register(name)}
          type="file"
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
        {error && <Errors message={error.message}/>}
      </div>
    </div>
  );
};

export default InputFile;
