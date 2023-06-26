import { useState, useEffect } from 'react';
// import React from 'react';
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

  // To select a random country from the list, then update the list not to include the selected country
  const selectCountry = () => {
    let randomNumber: number = Math.floor(Math.random()*250)
    const randomCountry: Country = countries[randomNumber]
    console.log("Random Country: ", randomCountry)
    const newCountriesList = countries.filter(country => country.name !== randomCountry.name)
    setCountries(newCountriesList)
    return randomCountry
  }

  return (
    <div className="App">
      <button onClick={handleClick}>RANDOM COUNTRY!</button>
      { selectedCountry && <SelectedCountry selectedCountry={selectedCountry}/> }
      <Countries countries={countries}/>
    </div>
  );
}

export default App;
