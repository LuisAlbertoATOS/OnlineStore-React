import { db, app } from "../firebase/Firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const PRODUCT_IMAGES_DIR = "product-images";
const productCollectionRef = collection(db, "products");
export class ProductDataService {
  addProduct = async (newProduct) => {
    const { image, ...rest } = newProduct;
    const downloadUrl = await this.uploadAndGetDownloadUrl(
      image[0],
      `${PRODUCT_IMAGES_DIR}/${image[0].lastModified}`
    );
    return addDoc(productCollectionRef, { ...rest, image: downloadUrl });
  };

  updateProduct = async (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    const { image, ...rest } = updatedProduct;
    const downloadUrl = await this.uploadAndGetDownloadUrl(
      image[0],
      `${PRODUCT_IMAGES_DIR}/${image[0].lastModified}`
    );
    return updateDoc(productDoc, { ...rest, image: downloadUrl });
  };

  getAllProducts = () => {
    return getDocs(productCollectionRef);
  };

  getProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    const res = await getDoc(productDoc);
    const data = res.data()
    return data
  };

  async uploadAndGetDownloadUrl(image, name) {
    const storage = getStorage(app);
    const storageRef = ref(storage, name);
    await uploadBytes(storageRef, image);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  }
}


/*
import React, { useEffect } from "react";
import { useState } from "react";
import { ProductDataService } from "../../services/product.services"

const ProductList = () => {
  const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts();
    }, []);

    const getProducts = async () => {
        const data = await ProductDataService.getAllProducts();
        console.log(data.docs);
    }

  return (
    <div>ProductList</div>
  )
}

export default ProductList



*/