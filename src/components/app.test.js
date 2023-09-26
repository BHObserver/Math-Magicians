import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('App component snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
