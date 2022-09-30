import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ProductDetails from './ProductDetails';

xdescribe(ProductDetails, () => {
  it("increments quantity", () => {
    const { getByRole } = render(<ProductDetails />);
    const productQuantityStart = getByTestId("product-detail-quantity").textContent;
    const incrementBtn = getByRole("button", {name:"+"});
    const productQuantityEnd = getByTestId("product-detail-quantity").textContent;
    fireEvent.click(incrementBtn);
    expect(productQuantityStart).toEq(productQuantityEnd-1);
  });
});
