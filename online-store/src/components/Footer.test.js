import { render, screen } from '@testing-library/react';
import Footer from './Footer'

xdescribe(Footer, () => {
  
  it("renders test elements", () => {
    render(<Footer />);
    const about = screen.findByText('About');
    const age = screen.findByText('2022');

    expect(about).toBeInTheDocument();
    expect(age).toBeInTheDocument();
  });
});
