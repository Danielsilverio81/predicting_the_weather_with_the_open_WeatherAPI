import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";



function App() {
  const [searchValue, setSearchValue] = useState('');
  const [cityValue, setCityValue] = useState('')
  const [apiResults, setApiResults] = useState([])
  
  const handleChange = (ev) => setSearchValue(ev.target.value)

  const handleClick = () => setCityValue(searchValue)

  useEffect(() => {
    async function getForecast() {
      const url = ``
      try {
        const response = await axios.get(url);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getForecast()
  }, [cityValue])

  return (
    <>
    <Header 
    handleChangeEvent={handleChange}
    handleClickEvent={handleClick}/>
    </>
  )
}

export default App
