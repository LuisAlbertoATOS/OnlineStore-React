import React from "react";
import InputText from "./input-components/InputText";

const UserInfoForm = () => {
  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-xl bg-white w-3/4">
          <form className="h-full w-full px-5 py-5">
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-800 text-center">
              Shipping information
            </h1>
            <InputText
              label={"Full name:"}
              placeholder={"Full name"}
              type={"text"}
              />
              <InputText
                label={"Email:"}
                placeholder={"Email"}
                type={"email"}
                />
            <InputText
              label={"Address:"}
              placeholder={"Shipping address"}
              type={"text"}
              />
            <div className="flex space-x-2 justify-center my-1.5">
              <button
                type="button"
                className="w-full inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                Submit shipping information
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfoForm;
