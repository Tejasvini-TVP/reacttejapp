import React,{useEffect} from 'react'

const Weathercard = ({ tempInfo}) => {
    const [weatherState, setWeatherState] = React. ReactuseState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } =tempInfo;   
    
    useEffect(() => {
        
    }, [input]);
    // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className='widget'>
          <div className='weatherIcon'>
           <i className='wi wi-day-sunny'></i> 
          </div>

          <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
                {/* <span>25.5&deg;</span> */}
            </div>
            <div className='description'>
                <div className='weatherCondition'>sunny</div>
                <div className='place'>{name},{country}</div>
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
                       { sunset} <br/>
                        Sunset
                    </p>
                </div>

                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-humidity'}></i>
                        {/* <i className={'wi wi-sunset'}></i> */}
                    </p>
                    <p className='extra-info-leftside'>
                        { humidity} <br/>
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
                       { pressure} <br/>
                        pressure
                    </p>
                </div> 
                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-humidity'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                       { speed} <br/>
                       speed
                    </p>
                </div> 
            </div>
          </div>
      </article>
    </>
  )
}

export default Weathercard;
