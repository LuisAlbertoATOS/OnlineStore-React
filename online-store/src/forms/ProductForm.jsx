import React from "react";
import InputFile from "./input-components/InputFile";
import InputNumber from "./input-components/InputNumber";
import InputSelect from "./input-components/InputSelect";
import InputText from "./input-components/InputText";

const ProductForm = (props) => {
  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-xl bg-white w-3/4">
          <form className="h-full w-full px-5 py-5">
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-800 text-center">
              {props.action} product
            </h1>
            <InputText
              label={"Product name:"}
              placeholder={"Type here"}
              type={"text"}
              />
            <InputText
              label={"Description:"}
              placeholder={"Type your description here"}
              type={"text"}
              />
            <InputNumber
              label={"Price:"}
              placeholder={"$"}
              type={"number"}
              min={1}
              />
            <InputNumber
              label={"Stock:"}
              placeholder={"0"}
              type={"number"}
              min={0}
              />
            <InputSelect
              label={"Category:"}
              select={"a category"}
              options={[
                { value: 'videogames', text: "Videogames" },
                { value: 'earphones', text: "Earphones" },
                { value: 'smartphones', text: "Smartphones" },
              ]}
              />
            <InputFile label={"Product image:"} type={"file"} />
            <div className="flex space-x-2 justify-center my-1.5">
              <button
                type="button"
                className="w-full inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductForm;
