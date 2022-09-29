import { db } from "../firebase/Firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const categoryCollectionRef = collection(db, "categories");
export class CategoryDataService {

  getAllCategories = async () => {
    const res = await getDocs(categoryCollectionRef); 
    let categories = [];
    res.forEach((category) => categories.push(category.data()));
    return categories;
  };
}
