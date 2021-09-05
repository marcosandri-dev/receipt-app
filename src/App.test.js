/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders Receipt App link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Receipt App/i);
  expect(linkElement).toBeInTheDocument();
});
