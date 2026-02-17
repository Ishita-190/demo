import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders plugin event test heading', () => {
  render(<App />);
  const heading = screen.getByText(/Plugin Event Test/i);
  expect(heading).toBeInTheDocument();
});
