import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      It doesn't exist the link. Please return to home!
      <Link to={`/`}>
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400"
        >
          Home
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
