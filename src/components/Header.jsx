import { FaSearchLocation } from "react-icons/fa"; 
import PropTypes from "prop-types";

Header.propTypes = {
  handleChangeEvent: PropTypes.func,
  handleClickEvent: PropTypes.func
}

export default function Header({handleChangeEvent, handleClickEvent}) {
    
  return (
    <header>
        <div className="container-search">
            <label htmlFor="citySearch">Busque por uma Cidade:</label>
            <input 
            type="search" 
            id="citySearch"
            onChange={handleChangeEvent}
            />
            <button
            className="btn-search"
            onClick={handleClickEvent}
            ><FaSearchLocation size={20} /></button>
        </div>
    </header>
  )
}
