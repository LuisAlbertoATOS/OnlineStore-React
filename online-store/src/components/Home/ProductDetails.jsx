import React, { useEffect } from 'react'
import { ProductDataService } from "../../services/product.services";
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {

 const {productId} = useParams()
 console.log(productId)

 async function fetchProduct(){
   const we = await new ProductDataService().getProduct(productId)
   console.log(we.data())
 }

 useEffect(() => {
  fetchProduct()
}, [])

  return (
    <div>Details
    </div>
  )
}

export default ProductDetails