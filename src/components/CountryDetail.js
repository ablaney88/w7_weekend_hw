import React from "react";

const CountryDetail = ({country}) => {
  return(
    <>
    <p>The Capital of {country.name.common} is {country.capital}</p>
    </>
  )
}

export default CountryDetail;