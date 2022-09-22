import React, { useEffect, useState } from "react";
import { ProductDataService } from "../../services/product.services";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  
  async function fetchProduct() {
    const p = await new ProductDataService().getProduct(productId);
    setProduct(p);

  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return <div>Details</div>;
};

export default ProductDetails;
