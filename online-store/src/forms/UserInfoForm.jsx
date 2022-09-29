import React from "react";
import { useForm } from "react-hook-form";
import InputText from "./input-components/InputText";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useShoppingCartContext } from "../components/contexts/ShoppingCartContext";
import { SalesDataService } from "../services/sales.services";
import { useNavigate } from "react-router-dom";
import { ProductDataService } from "../services/product.services";


const schema = z.object({
  name: z.string().min(10),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(10),
});

const UserInfoForm = () => {
  const { shoppingCartContext, setShoppingCartContext } = useShoppingCartContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema)
  });

  const navigate = useNavigate();
  
  async function onSubmit(userData) {
    const data = {
      name: userData.name,
      email: userData.email,
      address: userData.address,
      products: shoppingCartContext,
      date: Date.now(),
    }
    const res = await new SalesDataService().addSale(data)
    new ProductDataService().updateStocks(shoppingCartContext);
    setShoppingCartContext([]);
    navigate(`/ticket/${res.id}`)
    reset();
  }

  return (
    <React.Fragment>
      <div className="bg-blue-100 grid h-screen place-items-center">
        <div className="block p-6 rounded-lg shadow-xl bg-white w-3/4">
          <form className="h-full w-full px-5 py-5" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-800 text-center">
              Shipping information
            </h1>
            <InputText
              register={register}
              label={"Full name:"}
              placeholder={"Full name"}
              type={"text"}
              name= 'name'
              error={errors.name}
            />
            <InputText
              register={register}
              label={"Email:"}
              placeholder={"Email"}
              type={"email"}
              error={errors.email}
              name='email'
            />
            
            <InputText
              register={register}
              label={"Address:"}
              placeholder={"Shipping address"}
              type={"text"}
              name='address'
              error={errors.address}
            />
            
            <div className="flex space-x-2 justify-center my-1.5">
              <button
                type="submit"
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
