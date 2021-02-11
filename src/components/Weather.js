import React from 'react';
import '../css/Weather.css';

function Weather({ weatherData }) {

    // destructure the weatherData object
    let bgImg = '';
    const iconURL = 'http://openweathermap.org/img/wn/';

    const { main, weather, wind, name, dt } = weatherData;
    const dat = new Date(parseInt(dt));
    console.log('date : ', dat);

    if (weather[0].main == 'rain') {
        bgImg = 'rain';
    }

    return (
        <div className="weather rain">
            <div className="weather__mainData">
                <h2 className="weather__temp">{main.temp}<sup>&deg;c</sup></h2>
                <h3 className="weather__city">{name}</h3>
                <h4 className="weather__condition">{weather[0].description}</h4>
                <img src={`${iconURL}${weather[0].icon}@2x.png`} alt="weather_icon" className="weather__icon" />
                <h4 className="waether__humidity">{main.humidity}%</h4>
            </div>
            <div className="weather__windData">
                <div className="weather__windSpeed">Wind : {wind.speed} meter/sec</div>
            </div>
        </div>
    )
}

export default Weather
