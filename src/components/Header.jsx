import { FaSearchLocation } from "react-icons/fa"; 
import PropTypes from "prop-types";

Header.propTypes = {
  handleChangeEvent: PropTypes.func,
  handleClickEvent: PropTypes.func,
  handleKeyDownEvent: PropTypes.func
}

export default function Header({handleChangeEvent, handleClickEvent, handleKeyDownEvent}) {
    
  return (
    <header>
        <div className="container-search">
            <label htmlFor="citySearch">Busque uma Cidade:</label>
            <input 
            type="search" 
            id="citySearch"
            onChange={handleChangeEvent}
            onKeyDown={handleKeyDownEvent}
            />
            <button
            className="btn-search"
            onClick={handleClickEvent}
            ><FaSearchLocation size={20} /></button>
        </div>
    </header>
  )
}
