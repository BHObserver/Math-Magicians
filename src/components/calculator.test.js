import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './calculator';

test('Calculator component snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
