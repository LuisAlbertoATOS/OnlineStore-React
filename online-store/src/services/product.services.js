import { db, app } from "../firebase/Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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

  updateDoc = (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    return updateDoc(productDoc, updatedProduct);
  };

  getAllProducts = () => {
    return getDocs(productCollectionRef);
  };

  getProduct = (id) => {
    const productDoc = doc(db, "products", id);
    return getDoc(productDoc);
  };

  async uploadAndGetDownloadUrl(image, name) {
    const storage = getStorage(app);
    const storageRef = ref(storage, name);
    await uploadBytes(storageRef, image);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  }
}
