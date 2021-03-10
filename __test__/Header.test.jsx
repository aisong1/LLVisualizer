import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
});