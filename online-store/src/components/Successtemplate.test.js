import { render, screen } from '@testing-library/react';
import SuccessTemplate from './SuccessTemplate'

describe(SuccessTemplate, () => {
  const successMsg = 'success message example';

  it("renders success message", () => {
    render(<SuccessTemplate message={successMsg} />);
    const message = screen.getByText(successMsg);
    expect(message).toBeInTheDocument();
  });
});
