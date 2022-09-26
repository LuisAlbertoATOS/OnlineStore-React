import { db } from "../firebase/Firebase";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

const salesCollectionRef = collection(db, "sales");

export class SalesDataService {

  addSale = async (newSale) => {
    return addDoc(salesCollectionRef, newSale);
  };

  getAllSales = () => {
    return getDocs(salesCollectionRef);
  };
}
