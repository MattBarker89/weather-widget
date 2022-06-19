import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { CITY_POSITIONS } from './common/constants';
import CityName from './components/CityName';
import Temperature from './components/Temperature';
import Condition from './components/Condition';
import Loading from './components/Loading';
import SelectCity  from './components/SelectCity';
import { getConfigValue  } from './common/config';

const OPEN_WEATHER_API_KEY = getConfigValue('REACT_APP_API_OPEN_WEATHER_API_KEY');
const OPEN_WEATHER_API_URL = getConfigValue('REACT_APP_API_OPEN_WEATHER_API_URL');

const  App = () => {
  const [currentPosition, setCurrentPosition] = useState(undefined);
  const [currentWeather, setCurrentWeather] = useState(undefined)

  const getCurrentPositionFromBrowser = async () => {
    if (navigator.geolocation) {
      return new Promise(
        (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
      )
    } 
    return new Promise((resolve) => resolve(undefined))
  }

  const getWeatherForPosition = async (position) => {
    if (!position) {
      return
    }
    const url = `${OPEN_WEATHER_API_URL}?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    try {
      const { data, status, statusText } = await axios.get(url)
      if (status !== 200) {
        throw new Error(`unexpected status ${status}, ${statusText}`)
      }
      return data;
    } catch (e) {
      throw new Error(`error calling open weather api ${e.message}`);
    }
  }
  
  useEffect(() => {
    const tryToGetPositionFromBrowser = async () => {
      const positionFromBrowser = await getCurrentPositionFromBrowser();
      if (positionFromBrowser) {
        setCurrentPosition(positionFromBrowser.coords)
      } else {
        setCurrentPosition(CITY_POSITIONS.brisbane);
      }
    }
    try {
      tryToGetPositionFromBrowser();
    } catch (e) {
      console.error(`error getting position from browser ${e.message}`)
    }
  }, [])

  useEffect(() => {
    setCurrentPosition(undefined);
    const tryToGetWeatherForPosition = async () => {
      const res = await getWeatherForPosition(currentPosition);
      setCurrentWeather(res);
    }
    try{
      tryToGetWeatherForPosition();
    } catch (e) {
      console.error(`error getting weather for position ${e.message}`)
    }
  }, [currentPosition])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="container">
        <h1>Weather Widget</h1>
        { currentWeather ?
          <>
            <CityName cityName={ currentWeather.name }/>
            <Temperature temperature={ currentWeather.main.temp } />
            <Condition 
              iconId={ currentWeather.weather[0].icon } 
              description={ currentWeather.weather[0].description }
            />
          </>
        : 
          <Loading/>
        }
        <SelectCity setCurrentPosition={ setCurrentPosition }/>
      </div>
    </div>
  );
}

export default App;