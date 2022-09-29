import React, { useEffect, useState } from 'react';
import { CategoryDataService } from '../../services/category.services';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await new CategoryDataService().getAllCategories();
    setCategories(data.map((doc) => ({ ...doc, id: doc.id })));
  };

  return (
    <>
      <section className="my-5 flex flex-row flex-wrap justify-center gap-3">
        {categories.map((category) => {
          return <CategoryCard category={category} key={category.id}/>;
        })}
      </section>
    </>
  );
};

export default CategoryList;
