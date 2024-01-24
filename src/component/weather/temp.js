import React, { useEffect, useState } from 'react'
import weatherCard from './weatherCard'
import "./style.css"

const Temp = () => {
    const[searchValue, setSearchValue] = useState("Ahmedabad")
    const [tempInfo, setTemInfo] = useState("")
    const getWeatherInfo = async () => {
     try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metricappid=096be8eceb9d72b1854115d544046ac9`

        const res = await fetch(url);
        const data = await res.json();
          
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
        setTemInfo()
     }catch (error){
        console.log(error)
     }
    }
    useEffect(() => {getWeatherInfo () },[])
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
      <article className='widget'>
          <div className='weatherIcon'>
           <i className='wi wi-day-sunny'></i> 
          </div>

          <div className='weatherInfo'>
            <div className='temperature'>
                <span>25.5&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>sunny</div>
                <div className='place'>Ahmedabad,Gujarat</div>
            </div>
          </div>

          <div className='date'> {new Date().toLocaleString()} </div>

          {/* our 4column section */}

          <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-sunset'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        19:19 PM <br/>
                        Sunset
                    </p>
                </div>

                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-humidity'}></i>
                        {/* <i className={'wi wi-sunset'}></i> */}
                    </p>
                    <p className='extra-info-leftside'>
                        19:19 PM <br/>
                        Humidity
                    </p>
                </div>
            </div>
            <div className='weather-extra-info'>
          
            <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-humidity'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        19:19 PM <br/>
                        pressure
                    </p>
                </div> 
                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-humidity'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        19:19 PM <br/>
                       speed
                    </p>
                </div> 
            </div>
          </div>
      </article>
    </>
  )
}

export default Temp
