import React from 'react';
import renderer from 'react-test-renderer';
import QuoteDisplay from './fetchQuote';

test('QuoteDisplay component snapshot', () => {
  const tree = renderer.create(<QuoteDisplay />).toJSON();
  expect(tree).toMatchSnapshot();
});
