import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Akira Tochiro' })).toBeInTheDocument();
});
