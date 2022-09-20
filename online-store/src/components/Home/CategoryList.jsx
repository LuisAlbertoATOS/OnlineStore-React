import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  const dummyCategories = [
    {
      productId: '12345',
      name: 'Videogames',
      description:
        'Products related to videogames. Consoles,controllers, videogames, etc.',
      category: 'Videogames',
      image: 'https://i.imgur.com/cNVDCxs.png',
      deleted: false,
    },
    {
      productId: '12345',
      name: 'Videogames',
      description:
        'Products related to videogames. Consoles,controllers, videogames, etc.',
      category: 'Videogames',
      image: 'https://i.imgur.com/cNVDCxs.png',
      deleted: false,
    },
    {
      productId: '12345',
      name: 'Videogames',
      description:
        'Products related to videogames. Consoles,controllers, videogames, etc.',
      category: 'Videogames',
      image: 'https://i.imgur.com/cNVDCxs.png',
      deleted: false,
    },
    {
      productId: '12345',
      name: 'Videogames',
      description:
        'Products related to videogames. Consoles,controllers, videogames, etc.',
      category: 'Videogames',
      image: 'https://i.imgur.com/cNVDCxs.png',
      deleted: false,
    },
  ];

  console.log(dummyCategories);
  return (
    <section className="flex flex-row flex-wrap justify-center gap-3">
      {dummyCategories.map((category) => {
        return <CategoryCard product={category} />;
      })}
    </section>
  );
};

export default CategoryList;
