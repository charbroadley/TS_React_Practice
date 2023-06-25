import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Country from './models/Country';
import Countries from './components/Countries';
import './App.css';

function App() {

  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(res => {
      console.log("it worked")
      console.log(res.data)
      setCountries(res.data)
    })
    .catch(err => {
      console.log("error", err)
    })
  }, [])

  return (
    <div className="App">
      <h1>APP</h1>
      <Countries countries={countries}/>
    </div>
  );
}

export default App;
