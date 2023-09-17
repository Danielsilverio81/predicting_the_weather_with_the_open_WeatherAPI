import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cityValue, setCityValue] = useState('')
  
  const handleChange = (ev) => setSearchValue(ev.target.value)

  const handleClick = () => setCityValue(searchValue)
  

  useEffect(() => {
    async function getForecast() {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
      console.log(apiKey);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`;
      try {
        const response = await axios.get(url);
        console.log(response);
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
    <p>{}</p>
    </>
  )
}

export default App
