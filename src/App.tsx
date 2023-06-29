import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './models/Country';
import Countries from './components/Countries';
import SelectedCountry from './components/SelectedCountry';
import './App.css';

function App() {

  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<Country>()

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
        setCountries(res.data)
      })
      .catch(err => {
        console.log("error", err)
      })
  }, [])

  const handleClick = () => {
    const chosenCountry: Country = selectCountry()
    setSelectedCountry(chosenCountry)
  }

  const selectCountry = () => {
    let randomNumber: number = Math.floor(Math.random() * countries.length)
    const randomCountry: Country = countries[randomNumber]
    const newCountriesList = countries.filter(country => country.name !== randomCountry.name)
    setCountries(newCountriesList)
    return randomCountry
  }

  return (
    <div className="App">
      <h1>THE WHOLE WORLD</h1>
      <button onClick={handleClick}>RANDOM COUNTRY!</button>
      {selectedCountry && <SelectedCountry selectedCountry={selectedCountry} />}
      <Countries countries={countries} />
    </div>
  );
}

export default App;
