import React from "react";
import { v4 as getID } from "uuid";
import Country from "../models/Country";

interface CountriesProps {
    countries: Country[];
}

function Countries ({countries} : CountriesProps): JSX.Element {
    
    const countryList = countries.map(country => (
        <li key= {getID()}>{country.flag} {country.name.common} - Population: {country.population.toLocaleString('en-UK')}</li>
    ))

    return(
        <>
            <ul>
                {countryList}
            </ul>
        </>
    )
}

export default Countries