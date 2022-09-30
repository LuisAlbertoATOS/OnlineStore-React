import { render, screen } from '@testing-library/react';
import NotFound from './NotFound'

xdescribe(NotFound, () => {
  it("renders error message", () => {
    render(<NotFound />);
    const message = screen.getByText("It doesn't exist the link. Please return to home!");
    expect(message).toBeInTheDocument();
  });
});
