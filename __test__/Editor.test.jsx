import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from '../client/components/Editor';

describe('Editor.jsx', () => {
  test('should render', () => {
    render(<Editor />);
    screen.getByText('CODE EDITOR GOES HERE');
  });
});
