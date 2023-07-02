import React from "react";

const CountrySelect = ({countries, onCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value)

    }

    return (
        <>
        <select onChange= {handleChange}>
            <option>Choose your Country?</option>
            {countries.map(country => {
                return (
                    <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
                )
            })
            
            }
        </select>
        </>
    )
  
}

export default CountrySelect;