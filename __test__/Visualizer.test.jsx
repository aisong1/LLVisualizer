import React from 'react';
import { render, screen } from '@testing-library/react';
import Visualizer from '../client/components/Visualizer';

describe('Visualizer.jsx', () => {
  test('should render', () => {
    render(<Visualizer />);
    screen.getByText('VISUALIZER GOES HERE');
  });
})