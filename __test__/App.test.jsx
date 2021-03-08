import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/components/App';
import Header from '../client/components/Header';

describe('App.jsx', () => {
  test('should render the Header', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
