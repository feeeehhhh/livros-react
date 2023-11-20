import React from 'react';
import { render, screen } from '@testing-library/react';
import LivroLista from './LivroLista';

test('renders learn react link', () => {
  render(<LivroLista />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
