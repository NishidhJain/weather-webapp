import React from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti'
import '../css/Weather.css';

function Weather({ weatherData }) {

    // destructure the weatherData object
    let bgImg = '';
    const iconURL = 'http://openweathermap.org/img/wn/';

    const { main, weather, wind, name, dt } = weatherData;
    const dat = new Date(parseInt(dt * 1000));
    const hours = dat.getHours();
    const minutes = dat.getMinutes();
    const seconds = dat.getSeconds();
    console.log('date : ', dat);
    console.log('hr ', hours);
    console.log('min', minutes);

    console.log('sec ', seconds);


    if (weather[0].main == 'rain') {
        bgImg = 'rain';
    }

    return (
        <div className="weather">
            <div className="weather__mainData">
                <div className="left">
                    {/* <img src={`${iconURL}${weather[0].icon}@2x.png`} alt="weather_icon" className="weather__icon" /> */}
                    <TiWeatherPartlySunny className="weather__icon" />
                    <h4 className="weather__condition">{weather[0].description}</h4>
                </div>
                <div className="right">
                    <h2 className="weather__city">{name}</h2>
                    <h2 className="weather__temp">{main.temp}<sup>&deg;</sup></h2>

                </div>

                {/* 
                <h4 className="waether__humidity">{main.humidity}%</h4> */}
            </div>
            <div className="weather__otherData">
                <p className="weather__windSpeed">Wind : {wind.speed} m/sec</p>
                <p className="weather__humidity">Humidity : {main.humidity}%</p>
                <p className="weather__feelsLike">Feels : {main.feels_like} <sup>&deg;</sup> </p>
            </div>
        </div>
    )
}

export default Weather
