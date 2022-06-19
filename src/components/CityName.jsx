import React from 'react'

const CityName = ({ cityName }) => {
  return (
    <div className="row weather-component">
      <div className="twelve columns">
        <span className='title'>Location:</span>
        <span>{ cityName }</span>
      </div>
    </div>
  )
}

export default CityName