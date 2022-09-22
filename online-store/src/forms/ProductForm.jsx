import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import * as z from "zod";
import { CategoryDataService } from "../services/category.services";
import { ProductDataService } from "../services/product.services";
import InputFile from "./input-components/InputFile";
import InputNumber from "./input-components/InputNumber";
import InputSelect from "./input-components/InputSelect";
import InputText from "./input-components/InputText";

const schema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  price: z.number().positive(),
  stock: z.number().nonnegative(),
  category: z.string(),
  // category: z.enum(categories.map((c)=>{return c.category}), {
  //   errorMap: (issue, ctx) => {
  //     return { message: "Please select a valid option" };
  //   },
  // }),
  image: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Image is required"),
});

const ProductForm = (props) => {
  const isUpdate = props.action === "Update";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  let { productId } = useParams();
  function onSubmit(data) {
    if (props.action.toLowerCase() === "new") {
      new ProductDataService().addProduct(data);
    } else {
      new ProductDataService().updateProduct(productId, data);
    }
    navigate("/admin-dashboard/products");
    reset();
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await new CategoryDataService().getAllCategories();
    setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-xl bg-white w-3/4">
          <form
            className="h-full w-full px-5 py-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-800 text-center">
              {props.action} product
            </h1>
            <InputText
              register={register}
              name="name"
              label={"Product name:"}
              placeholder={"Type here"}
              error={errors.name}
              value={isUpdate ? "NAME" : null}
            />
            <InputText
              register={register}
              name="description"
              label={"Description:"}
              placeholder={"Type your description here"}
              error={errors.description}
              value={isUpdate ? "DESCRIPTION" : null}
            />

            <InputNumber
              register={register}
              name="price"
              label={"Price:"}
              placeholder={"$"}
              error={errors.price}
              value={isUpdate ? 5000 : null}
            />
            <InputNumber
              register={register}
              name="stock"
              label={"Stock:"}
              placeholder={"0"}
              error={errors.stock}
              value={isUpdate ? 5000 : null}
            />
            <InputSelect
              register={register}
              name="category"
              label={"Category:"}
              select={"a category"}
              options={categories.map((category) => {
                return { value: category.category, text: category.name };
              })}
              error={errors.category}
              value={isUpdate ? "videogames" : null}
            />
            <InputFile
              register={register}
              label={"Product image:"}
              name="image"
              error={errors.image}
            />
            <div className="flex space-x-2 justify-center my-1.5">
              <button
                type="submit"
                className="w-full inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {props.action} product
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductForm;
