import React ,{useEffect}from 'react'

const weatherCard = ({ tempInfo}) => {
    const {
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
 } = tempInfo;
  return (
    <>
      <article className='widget'>
          <div className='weatherIcon'>
           <i className='wi wi-day-sunny'></i> 
          </div>

          <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
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

export default weatherCard
