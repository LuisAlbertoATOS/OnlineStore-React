import React from "react";
import InputFile from "./input-components/InputFile";
import InputNumber from "./input-components/InputNumber";
import InputSelect from "./input-components/InputSelect";
import InputText from "./input-components/InputText";

const ProductForm = () => {
  return (
    <React.Fragment>
      <h1>New product</h1>
      <form class="h-screen w-1/2 mx-5 justify-items-center">
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
          placeholder={"Type your price here"}
          type={"number"}
          min={1}
        />
        <InputNumber
          label={"Stock:"}
          placeholder={"Type your current stock here"}
          type={"number"}
          min={0}
        />
        <InputSelect
          label={"Category:"}
          select={"a category"}
          options={[
            { value: 1, text: "Videogames" },
            { value: 2, text: "Earphones" },
            { value: 3, text: "Smartphones" },
          ]}
        />
        <InputFile label={"Product image:"} type={"file"} />
        <div class="flex space-x-2 justify-center">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add product
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ProductForm;
