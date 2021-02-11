import React from 'react';
import Search from './components/Search';
import './App.css';
import Weather from './components/Weather';

function App() {

  const [data, setData] = React.useState({})
  const API_KEY = '70abe5234a96fd06a01426ddd67f11c1';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

  // console.log(data.length);
  const getData = async (query) => {
    // console.log('get Data called, query is:', query);

    const queryURL = `${url}${query}&units=metric&appid=${API_KEY}`;

    try {
      const res = await fetch(queryURL);
      // console.log('response received', res);
      const jsonResponse = await res.json();
      console.log('json response', jsonResponse);
      setData(jsonResponse);
    }
    catch (err) {
      console.log('err occured', err);
    }
  }
  // console.log('data value updated', data);


  return (
    <div className="App">
      <h1>Weather Webapp</h1>
      <Search getData={getData} />
      { data.cod == '200' ? (<Weather weatherData={data} />) : data.message}

    </div>
  );
}

export default App;
