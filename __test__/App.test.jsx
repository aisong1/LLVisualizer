import React from 'react';
import { render } from '@testing-library/react';
import App from '../client/components/App';

describe('App.jsx', () => {
  test('should render onto the page', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        If you can see this, React is working!
      </div>
    `);
  });
});
