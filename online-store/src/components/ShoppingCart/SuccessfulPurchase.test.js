import { render, screen } from '@testing-library/react';
import SuccessfullPurchase from './SuccessfullPurchase'

describe(SuccessfullPurchase, () => {
  it("render element title", () => {
    render(<SuccessfullPurchase />);
    const linkElement = screen.getByText('Successfull Purchase');
    expect(linkElement).toBeInTheDocument();
  });
});
