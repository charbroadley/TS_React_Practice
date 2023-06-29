import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axois from 'axios'
import MockAdapter from 'axios-mock-adapter'; // Or could use jest.mock()

const mock = new MockAdapter(axois)

test('renders title text', () => {
  render(<App />)
  const titleText: HTMLElement = screen.getByRole('heading')
  expect(titleText).toBeInTheDocument()
})

test('button has correct label', () => {
  render(<App />)
  const randomButton: HTMLElement = screen.getByRole('button', { name: 'RANDOM COUNTRY!' })
  expect(randomButton).toHaveTextContent('RANDOM COUNTRY!')
})

test.only('when button is clicked random country name renders', async () => {


  mock.onGet("https://restcountries.com/v3.1/all")
    .reply(200, [{
      name: {
        common: "Jordan"
      },
      flag: "🇯🇴",
      population: 10203140
    }])

  axois.get("https://restcountries.com/v3.1/all")
    .then(function (response) {
      // console.log(response.data);
    })

  render(<App />)
  const randomButton: HTMLElement = screen.getByRole('button', { name: 'RANDOM COUNTRY!' })
  expect(randomButton).toBeInTheDocument()

  await waitFor(() => {
    const t = screen.getByTestId('country-0')
    expect(t).toBeInTheDocument()
  }, { timeout: 4000 })

  fireEvent.click(randomButton)

  const country: HTMLElement = screen.getByTestId('randomCountry')
  expect(country).toBeVisible()

})

