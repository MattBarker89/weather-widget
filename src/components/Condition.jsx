import React from 'react'
import { stringToTitleCase } from '../common/utils'

const Condition = ({ iconId, description }) => {
  return (
    <div className="row weather-component">
      <div className="twelve columns">
      <span className='title'>Current Conditions:</span>
        <span>{ stringToTitleCase(description) }</span>
        <img 
          alt={description} 
          src={`http://openweathermap.org/img/w/${iconId}.png`}
        />
      </div>
  </div>
  )
}

export default Condition