import React from "react";
import Country from "../models/Country";

interface CountriesProps {
    countries: Country[];
}

function Countries ({countries} : CountriesProps): JSX.Element {
    
    console.log(countries)

    return(
        <>
            <h1>Countries List</h1>
            <ul>
                {countries.map(country => (
                    <li key={country.population}>{country.name.common}</li>
                ))}
            </ul>
        </>
    )
}

export default Countries