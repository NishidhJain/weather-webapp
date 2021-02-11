import React from 'react';
import Search from './components/Search';
import './App.css';
import Weather from './components/Weather';

function App() {

  const [data, setData] = React.useState({});

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const oneCallAPI_URL = 'https://api.openweathermap.org/data/2.5/onecall';

  // console.log(process.env);

  // console.log(data.length);
  const getData = async (query) => {
    // console.log('get Data called, query is:', query);



    const queryURL = `${url}${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    try {
      const res = await fetch(queryURL);
      // console.log('response received', res);
      const jsonResponse = await res.json();
      console.log('json response', jsonResponse);
      setData(jsonResponse);

      if (jsonResponse.cod == '200') {

        const { coord } = jsonResponse;

        const oneAPI = `${oneCallAPI_URL}?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_API_KEY}`;

        const oneCallResponse = await fetch(oneAPI);
        // console.log('one call Api', oneCallResponse);
        const oneCallJSON = await oneCallResponse.json();
        console.log('one call json', oneCallJSON);
      }
    }
    catch (err) {
      console.log('err occured', err);
    }
  }
  // console.log('data value updated', data);


  return (
    <div className="app">
      <div className="app__container">
        <div className="app__top">

          <div className="space__container"></div>

          <Search getData={getData} />

          {data.cod == '200' ? (<Weather weatherData={data} />) : data.message}


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
            <path fill="#fff" fill-opacity="1" d="M0,64L34.3,101.3C68.6,139,137,213,206,250.7C274.3,288,343,288,411,256C480,224,549,160,617,154.7C685.7,149,754,203,823,234.7C891.4,267,960,277,1029,250.7C1097.1,224,1166,160,1234,160C1302.9,160,1371,224,1406,256L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>

          {/* <Search /> */}
        </div>
      </div>

      {/* <h1>Weather Webapp</h1> */}
      <div className="app-container rain">


      </div>


    </div>
  );
}

export default App;
