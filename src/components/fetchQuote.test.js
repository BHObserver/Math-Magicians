import React from 'react';
import { render } from '@testing-library/react';
import QuoteDisplay from './fetchQuote';

test('renders loading message initially', () => {
  render(<QuoteDisplay />);
});

test('renders a quote after loading', async () => {
  // Mock the fetch function to return a resolved promise with sample data
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: async () => [{ quote: 'Test Quote', author: 'Test Author' }],
  });

  render(<QuoteDisplay />);
});
