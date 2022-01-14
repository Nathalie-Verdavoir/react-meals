import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('header', () => {
  
  render(<BrowserRouter><Header /></BrowserRouter>);
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText("Random Meal recipe");
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText("Random Drink recipe");
  expect(linkElement3).toBeInTheDocument();
});