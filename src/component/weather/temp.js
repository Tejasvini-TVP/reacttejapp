import React, { useEffect, useState } from 'react'

import "./style.css"
import WeatherCard from './weatherCard'

const Temp = () => {
    const[searchValue, setSearchValue] = useState("Ahmedabad")
    const [tempInfo, setTemInfo] = useState({})
    const getWeatherInfo = async () => {
     try{
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={096be8eceb9d72b1854115d544046ac9}`;
 let url =`https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=f6e81a07330a5d32dbee8475ec0c926a`;
        let res = await fetch(url);
        let data = await res.json();
          
        const { temp,humidity, pressure} = data.main;
        const { main: weathermood } = data.weather[0];
        const { name} = data;
        const { speed } = data.wind;
        const { country ,sunset} = data.sys;
       
        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        }
        setTemInfo(myNewWeatherInfo)
     }catch (error){
        console.log(error)
     }
    }
    useEffect(() => {getWeatherInfo(); },[])
  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input
            type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
             onChange={(e) => setSearchValue(e.target.value)}
            />
             <button className='searchButton' type='button'onClick={getWeatherInfo}>
                search
             </button>
        </div>
      </div>
      {/* our temp card */}
          <WeatherCard tempInfo= {tempInfo}/>
      </>
     )
}
 export default Temp;
