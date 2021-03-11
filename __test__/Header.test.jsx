import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../client/components/Header';

describe('Header.jsx', () => {
  test('should render the title', () => {
    render(<Header />);
    screen.getByRole('heading', { name: /LL Visualizer/i });
  });

  test('should render a button with the Github logo', () => {
    render(<Header />);
    screen.getByRole('button', { name: /GitHub/i });
  });

  // Is this test a unit test or an integration test?
  // test('should take the user to a new window on button click', () => {
  //   const handleClick = jest.fn();
  //   render(<Header />);
  //   console.log(screen.getByRole('button', { name: /GitHub/i }));
  //   expect(screen.getByRole('button', { name: /GitHub/i })).toHaveBeenCalledTimes(1);
  // });
});
