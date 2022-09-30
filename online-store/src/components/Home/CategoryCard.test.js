import { render, screen } from '@testing-library/react';
import CategoryCard from './CategoryCard'

xdescribe(CategoryCard, () => {

  const categoryObj = {
    category: 'smarthphones',
    deleted: false,
    description: 'Lorem',
    image: 'imageUrl',
    name: 'Example name'
  }

  it("renders category data", () => {
    render(<CategoryCard category={categoryObj} key={1} />);
    const linkElement = screen.getByText(categoryObj.name);
    expect(linkElement).toBeInTheDocument();
  });
});
