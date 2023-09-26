import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

test('renders calculator with initial state', () => {
  render(<Calculator />);
});

test('', () => {
  render(<Calculator />);

  // Click some buttons to update the display
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
});
