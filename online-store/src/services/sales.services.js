import { db } from "../firebase/Firebase";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc
} from "firebase/firestore";

const salesCollectionRef = collection(db, "sales");

export class SalesDataService {

  addSale = async (newSale) => {
    return addDoc(salesCollectionRef, newSale);
  };

  getAllSales = () => {
    return getDocs(salesCollectionRef);
  };

  getSale = async (saleId) => {
    const saleDoc = doc(db, "sales", saleId);
    const res = await getDoc(saleDoc);
    const data = res.data();
    return data;
  };
}
