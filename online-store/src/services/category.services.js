import { db, app } from "../firebase/Firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { array } from "zod";

const categoryCollectionRef = collection(db, "categories");
export class CategoryDataService {

  getAllCategories = async () => {
    const querySnapshot = await getDocs(categoryCollectionRef);

    // console.log(querySnapshot);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    
    return getDocs(querySnapshot);
  };

  getAllCategoryNames = async () => {
    const querySnapshot = await getDocs(categoryCollectionRef);

    let categories = [];
    querySnapshot.forEach((doc) => {
      categories.push({ value: doc.data().category, text: doc.data().name });
    });
    console.log(categories);
    
    return categories;
  };
}
