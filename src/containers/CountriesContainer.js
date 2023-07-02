import React, { useState, useEffect } from "react";
import CountrySelector from "../components/CountrySelect";
import Country from "../components/Country";

const CountriesContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState('')

    const getCountries = () => {
      fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(countriesData => setCountries(countriesData))
    }

    useEffect(() => {
      getCountries()
    }, [])

    const handleCountrySelected = cca3 => {
        setSelectedCountryCCA3Code(cca3)
    }

    const selectedCountry = countries.find(
        country => country.cca3 === selectedCountryCCA3Code
    )
  
    return (
        <>
            <h1>Here are my Countries</h1>
            <CountrySelector countries={countries} onCountrySelected={handleCountrySelected}/>
            <Country country={selectedCountry}/>
        </>
    )
}

export default CountriesContainer;
