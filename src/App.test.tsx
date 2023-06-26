import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import SelectedCountry from './components/SelectedCountry';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders title text', () => {
  render(<App/>)
  const titleText: HTMLElement = screen.getByRole('heading')
  expect(titleText).toBeInTheDocument()
})

test('button has correct label', () => {
  render(<App/>)
  const randomButton: HTMLElement = screen.getByRole('button', {name: 'RANDOM COUNTRY!'})
  expect(randomButton).toHaveTextContent('RANDOM COUNTRY!')
})

test('when button is clicked random country name renders', () => {
  render(<App/>)
  // Find the button
  const randomButton: HTMLElement = screen.getByRole('button', {name: 'RANDOM COUNTRY!'})
  // Click the button 
  fireEvent.click(randomButton)
  // Expect text to display 
  const randomCountry: HTMLElement = screen.getByRole('paragraph')
  expect(randomCountry).toBeInTheDocument()
})

// Need to render App to access button - need to render SelectedCountry to acces paragraph

