import { db } from "../firebase/Firebase"

import { collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    // deleteDoc, 
    doc 
} from "firebase/firestore";

const productCollectionRef = collection(db,"products")
class ProductDataService {
    addProduct = (newProduct) => {
        return addDoc(productCollectionRef, newProduct);
    }

    updateDoc = (id, updatedProduct) => {
        const productDoc = doc(db, "products", id);
        return updateDoc(productDoc, updatedProduct)
    };

    // deleteProduct = (id) => {
    //     const productDoc = doc(db, "products", id);
    //     return deleteDoc()
    // }

    getAllProducts = () => {
        return getDocs(productCollectionRef);
    }

    getProduct = (id) => {
        const productDoc = doc(db, "products", id);
        return getDoc(productDoc);
    }

}

export default new ProductDataService();