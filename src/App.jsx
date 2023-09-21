import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NextDayInformation from "./components/NextDayInformation";
import ErrorElement from "./components/ErrorElement";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cityValue, setCityValue] = useState('')
  const [currentWeatherApiData, setCurrentWeatherApiData] = useState([]);
  const [nextDayInfoApi, setNextDayInfoApi] =  useState([])
  const [error, setError] = useState('')
  
  const handleChange = (ev) => setSearchValue(ev.target.value)

  const handleClick = () => {
    setCityValue(searchValue);
    localStorage.setItem('cityValue', searchValue);
  }

  const handleDownPress = (ev) => {
    if (ev.key === 'Enter') {
      handleClick();
    }
  }
  
  async function getForecast(url1, url2) {
    try {
      const response1 = await axios.get(url1);
      const response2 = await axios.get(url2);
      const data = response1.data
      const list = response2.data.list
      setCurrentWeatherApiData([data])
      setNextDayInfoApi(list)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    const storedCityValue = localStorage.getItem('cityValue');
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
    if (storedCityValue !== null) {
      setCityValue(storedCityValue);
      const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${storedCityValue}&units=metric&appid=${apiKey}&lang=pt_br`;
      const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${storedCityValue}&cnt=10&units=metric&appid=${apiKey}&lang=pt_br`;
      getForecast(url1, url2);
    } 
  
    if (cityValue !== '') {
      const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`;
      const url4 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&cnt=10&units=metric&appid=${apiKey}&lang=pt_br`;
      getForecast(url3, url4);
    }
  }, [cityValue])

  return (
    <>
    <Header 
    handleChangeEvent={handleChange}
    handleClickEvent={handleClick}
    handleKeyDownEvent={handleDownPress}
    />
    <main className="main-content">
      <MainContent currentWeatherData={currentWeatherApiData} />
      {cityValue !== '' ? <NextDayInformation nextDayInfo={nextDayInfoApi}/> : <div className="content">
        <p>Aguardando Sua Busca...</p>
      </div>}
      {error !== '' ? <ErrorElement message={error}/> : null}
    </main>
    </>
  )
}

export default App
