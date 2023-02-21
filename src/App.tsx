import React, {useEffect, useState}  from 'react';
import axios from 'axios';

import './App.css';
import useDebounce from './hooks/useDebounce';

type City = {
  name: string;
  local_names: object;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

type GetCityResponse = {
  data: City[];
};

type Weather = {
    main: {
      "temp": number,
      "feels_like": number,
      "temp_min": number,
      "temp_max": number,
      "pressure": number,
      "humidity": number,
  },
};

type GetWeatherResponse = {
  data: Weather
};

function App() {
  const [token, setToken] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const debouncedCity = useDebounce(city);

  const [loadingCities, setLoadingCities] = useState<boolean>(false);
  const [loadingCity, setLoadingCity] = useState<boolean>(false);

  const [cityList, setCityList] = useState<City[] | any>([]);
  const [cityIndex, setCityIndex] = useState<number>(-1);

  const [weather, setWeather] = useState<Weather | any>({});

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }

  const handleCityIndexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityIndex(Number(e.target.value))
  }

  useEffect(() => {
    if (debouncedCity?.length > 0 && token?.length > 0) {
      setLoadingCities(true);
      axios.get<GetCityResponse>(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${token}`)
      .then(res => {
        setCityList(res.data);
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoadingCities(false)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedCity]);

  useEffect(() => {
    if (cityIndex > -1) {
      setLoadingCity(true);
      axios.get<GetWeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${cityList[cityIndex].lat}&lon=${cityList[cityIndex].lon}&appid=${token}&units=metric`)
      .then(res => {
        setWeather(res.data);
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoadingCity(false)
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityIndex])

  return (
    <div className="App">

        <p>Token: </p>
        <input type="text" value={token} onChange={handleTokenChange} disabled={loadingCities} />

        <p>Ville: </p>
        <input type="text" value={city} onChange={handleCityChange} disabled={token?.length === 0 || loadingCities} />

        <br />
        <br />

        {cityList.length > 0 && 
          <select value={cityIndex} onChange={handleCityIndexChange} disabled={token?.length === 0 || loadingCities || loadingCity}>
            <option value="-1">Choisir une ville</option>

            {cityList.map((item: City, index: number) => {
              return <option key={index} value={index}>{`${item.name} ${item.country} ${item.state}`}</option>
            })}
          </select>
        }
        
        <br />
        <br />

        {weather?.main &&
          <div>
            Température actuelle en degrés celsius: {weather.main.temp}
          </div>
        }

    </div>
  );
}

export default App;
