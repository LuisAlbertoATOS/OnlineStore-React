import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessfullPurchase from './SuccessfullPurchase';

import { screens } from '@testing-library/dom';

test('Renders successful purchase text', () => {
  render(<SuccessfullPurchase />);
  const text = screen.getByText(/Successfull Purchase/i);
  expect(text).toBeInTheDocument();
});

test('Render Title', () => {
  render(<SuccessfullPurchase />);
  const title = screen.getByTestId('mytestid');
  expect(title).toBeInTheDocument();
});

test('Sum should be 6', () => {
  render(<SuccessfullPurchase />);
  const sum = screen.getByTitle('sum');
  expect(sum.textContent).toBe('6');
});

test('Renders 3 list items', () => {
  render(<SuccessfullPurchase />);
  const listItem = screen.getAllByRole('listitem');
  expect(listItem.length).toEqual(3);
});
