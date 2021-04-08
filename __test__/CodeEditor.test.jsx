import React from 'react';
import { render, screen } from '@testing-library/react';
import CodeEditor from '../client/components/CodeEditor';

describe('CodeEditor.jsx', () => {
  test('should render', () => {
    render(<CodeEditor />);
    screen.getByText('CODE EDITOR GOES HERE');
  });
});
