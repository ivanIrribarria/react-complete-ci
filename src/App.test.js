import { render, screen } from '@testing-library/react';
import App from './App';
import items from "./fixtures/global";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(items.appName);
  expect(linkElement).toBeInTheDocument();
});
