import { db } from "../firebase/Firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const categoryCollectionRef = collection(db, "categories");
export class CategoryDataService {

  getAllCategories = () => {
    return getDocs(categoryCollectionRef);
  };
}
