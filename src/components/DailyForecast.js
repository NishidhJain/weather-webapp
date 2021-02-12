import React from 'react'

function DailyForecast({ forecastData }) {

    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const iconURL = 'http://openweathermap.org/img/wn/';

    console.log('forecast Data:', forecastData);


    const dt = forecastData.daily.map(item => {
        const currDate = new Date(item.dt * 1000); //given dt is in unix, so to convert multiply by 1000 
        return Days[currDate.getDay()];
    }).slice(0, 5);
    console.log('dt', dt);

    const requiredData = forecastData.daily.map((item, index) => {

        //given dt is in unix, so to convert multiply by 1000
        const currDate = new Date(item.dt * 1000);

        const icn = item.weather[0].icon;
        const minTmp = item.temp.min;
        const maxTmp = item.temp.max;


        return { id: index, day: Days[currDate.getDay()], icon: icn, minTemp: minTmp, maxTemp: maxTmp };
    }).slice(0, 5);
    console.log('req Data: ', requiredData);

    return (
        <div className="daily__weatherList">
            {
                requiredData.map(item => {
                    return (
                        <div className="daily__weatherItem" key={item.id}>
                            <p className="daily__weatherDay">{item.day}</p>
                            <img src={`${iconURL}${item.icon}@2x.png`} alt="Icon" className="daily__weatherIcon" />
                            <p className="daily__minTemp">{item.minTemp}</p>
                            <p className="daily__maxTemp">{item.maxTemp}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DailyForecast
