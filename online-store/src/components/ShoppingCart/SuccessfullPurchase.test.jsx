import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SuccessfullPurchase from './SuccessfullPurchase';

test('renders content', () => {
  const successfullPurchase = {
    content: 'This is a test',
    important: true,
  };

  const view = render(<SuccessfullPurchase />);

  console.log(view);
});
