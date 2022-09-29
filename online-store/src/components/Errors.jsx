import React from 'react'

const Errors = (props) => {
  return (
    <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2 mb-2"
    role="alert"
  >
    <strong className="font-bold">
      {props.message}
    </strong>
  </div>
  );
}

export default Errors;