// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App-header', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});