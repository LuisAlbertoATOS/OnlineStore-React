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
    return addDoc(productCollectionRef, { ...rest, image: downloadUrl, deleted: false });
  };

  updateProduct = async (id, updatedProduct) => {
    const productDoc = doc(db, "products", id);
    const { ...rest } = updatedProduct;

    const p = await this.getProduct(id);
    const downloadUrl = p.image;

    return updateDoc(productDoc, { ...rest, image: downloadUrl });
  };

  updateStocks = (purchasedCart) => {
    purchasedCart.map(async (item) => {
      const productDoc = doc(db, "products", item.productId);

      const updatedProduct = await new ProductDataService().getProduct(
        item.productId
      );
      updatedProduct.stock -= item.quantity;

      return updateDoc(productDoc, updatedProduct);
    });
  };

  logicalDelete = async (productId) => {
    const productDoc = doc(db, "products", productId);
    let deletedProduct = await new ProductDataService().getProduct(productId);
    deletedProduct.deleted = true;
    
    return updateDoc(productDoc, deletedProduct);
  };

  getAllProducts = () => {
    return getDocs(productCollectionRef);
  };

  getProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    const res = await getDoc(productDoc);
    const data = res.data();
    return data;
  };

  async uploadAndGetDownloadUrl(image, name) {
    const storage = getStorage(app);
    const storageRef = ref(storage, name);
    await uploadBytes(storageRef, image);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  }
}
