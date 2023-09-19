import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cityValue, setCityValue] = useState('')
  const [apiData, setApiData] = useState([]);
  
  const handleChange = (ev) => setSearchValue(ev.target.value)

  const handleClick = () => setCityValue(searchValue)
  

  useEffect(() => {
    async function getForecast() {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`;
      try {
        const response = await axios.get(url);
        const data = response.data
        console.log(data);
        setApiData([data])
      } catch (error) {
        console.error(error);
      }
    }
    if (cityValue) {
      getForecast();
    }
  }, [cityValue])

  return (
    <>
    <Header 
    handleChangeEvent={handleChange}
    handleClickEvent={handleClick}/>
    <MainContent results={apiData} />
   
    </>
  )
}

export default App
