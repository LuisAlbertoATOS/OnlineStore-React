import { render, screen } from '@testing-library/react';
import Errors from './Errors'

describe(Errors, () => {
  const errorMsg = 'error message example';

  it("renders error message", () => {
    render(<Errors message={errorMsg} />);
    const message = screen.getByText(errorMsg);
    expect(message).toBeInTheDocument();
  });
});
