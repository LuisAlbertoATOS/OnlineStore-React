import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  const dummyCategories = [
    {
      categoryId: '1',
      name: 'Videogames',
      description: 'Products related to videogames.',
      category: 'Videogames',
      image: 'https://i.imgur.com/cNVDCxs.png',
      deleted: false,
    },
    {
      categoryId: '2',
      name: 'Consoles',
      description: 'Products related to consoles. ',
      category: 'Consoles',
      image: 'https://i.imgur.com/U1SE3XT.png',
      deleted: false,
    },
    {
      categoryId: '3',
      name: 'Laptops',
      description: 'Products related to laptops.',
      category: 'Laptops',
      image: 'https://i.imgur.com/xSxUL0N.png',
      deleted: false,
    },
    {
      categoryId: '4',
      name: 'Headphones',
      description: 'Products related to headphones.',
      category: 'Headphones',
      image: 'https://i.imgur.com/6VM1noV.png',
      deleted: false,
    },
  ];

  console.log(dummyCategories);
  return (
    <>
      <h1 className="italic font-semibold text-center text-2xl p-4 text-slate-100 bg-blue-600 m-5">
        Category List
      </h1>
      <section className="flex flex-row flex-wrap justify-center gap-3">
        {dummyCategories.map((category) => {
          return <CategoryCard category={category} />;
        })}
      </section>
    </>
  );
};

export default CategoryList;
