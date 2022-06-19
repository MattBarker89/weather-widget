import React from 'react'
import { CITY_POSITIONS } from '../common/constants'

const SelectCity = ({ setCurrentPosition }) => {
  const handleSelectOnChange = (value) => setCurrentPosition(CITY_POSITIONS[value])
  
  return (
    <div className="row weather-component">
      <div className="twelve columns">
      <label htmlFor="citySelect">Select City</label>
      <select 
        className="u-full-width" 
        id="citySelect" 
        onChange={ (e) => handleSelectOnChange(e.target.value) }
      > 
        <option value="brisbane">Brisbane</option>
        <option value="sydney">Sydney</option>
        <option value="melbourne">Melbourne</option>
      </select>
      </div>
  </div>
  )
}

export default SelectCity