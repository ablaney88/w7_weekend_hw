import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {

  const handleClick = () => {
    console.log(`Clicked on ${country.name.common}`)
    onCountryClicked(country);
  }

  return <li onClick={handleClick}>{country.name.common}</li>
}

export default ListItem;