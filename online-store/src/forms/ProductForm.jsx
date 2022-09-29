import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
  image: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, "Image is required"),
});

const updateSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  price: z.number().positive(),
  stock: z.number().nonnegative(),
  category: z.string(),
});

const ProductForm = ({ action }) => {

  let { productId } = useParams();
  const [categories, setCategories] = useState(undefined);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver( action.toLowerCase() === "new" ? schema : updateSchema ),
  });

  function onSubmit(data) {
    if (action.toLowerCase() === "new") {
      new ProductDataService().addProduct(data);
    } else {
      new ProductDataService().updateProduct(productId, data);
    }
    navigate("/admin-dashboard/products");
    reset();
  }

  async function fetchProduct() {
    if (action === "Update") {
      const { image, ...p } = await new ProductDataService().getProduct(
        productId
      );
      reset(p);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (categories) {
      fetchProduct();
    }
  }, [categories]);

  const getCategories = async () => {
    const data = await new CategoryDataService().getAllCategories();
    setCategories(data);
  };

  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-2xl bg-white w-3/4">
          <form
            className="h-full w-full px-5 py-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-800 text-center">
              {action} product
            </h1>
            <InputText
              register={register}
              name="name"
              label={"Product name:"}
              placeholder={"Type here"}
              error={errors.name}
            />
            <InputText
              register={register}
              name="description"
              label={"Description:"}
              placeholder={"Type your description here"}
              error={errors.description}
            />

            <InputNumber
              register={register}
              name="price"
              label={"Price:"}
              placeholder={"$"}
              error={errors.price}
            />
            <InputNumber
              register={register}
              name="stock"
              label={"Stock:"}
              placeholder={"0"}
              error={errors.stock}
            />
            <InputSelect
              register={register}
              name="category"
              label={"Category:"}
              select={"a category"}
              error={errors.category}
            >
              {categories?.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.name}
                </option>
              ))}
            </InputSelect>
            {action.toLowerCase() === "new" && (
            <InputFile
              register={register}
              label={"Product image:"}
              name="image"
              error={errors.image}
            />
            )}
            <div className="flex space-x-2 justify-center my-1.5">
              <button
                type="submit"
                className="w-full inline-block px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {action} product
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductForm;
