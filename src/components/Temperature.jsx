import React from 'react'

const Temperature = ({ temperature }) => {
  return (
    <div className="row weather-component">
      <div className="twelve columns">
        <span className='title'>Temperature:</span>
        <span>{ temperature }°C</span>
      </div>
    </div>
  )
}

export default Temperature