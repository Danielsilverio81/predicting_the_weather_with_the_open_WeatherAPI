import PropTypes from "prop-types";
import Welcome from "./Welcome";
import clearSky from "../assets/images_import/clear-sky.png";

MainContent.propTypes = {
  currentWeatherData: PropTypes.array,
};
let temp;
const textColor = temp > 28 ? 'red' : 'blue';
const dataFormat = (dataString) => {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'quin', 'Sext', 'Sab']
  const data = new Date(dataString)
  const dayWeek = days[data.getDay()]
  const dayMonth = data.getDate()
  const hours = data.toLocaleTimeString('pt-BR')

  return `${dayWeek} ${dayMonth} ${hours}`
}

const formatUnixTime = (time) => {
  const data = new Date(time * 1000); 
  const hours = data.getUTCHours(); 
  const minutes = data.getUTCMinutes(); 

return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

export default function MainContent({ currentWeatherData }) {
  return (
    <section>
      {currentWeatherData.length === 0 ? <Welcome /> :
      (
        <div className="content fade-in">
            {currentWeatherData.map(data => (
          <div
          key={data.id} 
          className="information">
              <div className="info-temp">
                <h2>{data.name}</h2>
                <strong>{dataFormat(new Date())}</strong>
                <p><span style={{ color: textColor }}>{temp = data.main.temp}</span> ºC</p>
                <p>Sensação térmica:</p> 
                <p><strong>{data.main.feels_like}</strong></p>
                <p>maxima de:</p> <p><strong>{data.main.temp_max}</strong></p> 
                <p>Minima de:</p> <p><strong>{data.main.temp_min}</strong></p>
              </div>
              <div className="highlights"> 
                        <p>Umidade: <strong>{data.main.humidity}%</strong></p> 
                        <p><strong>{data.weather[0].description}</strong></p> 
                        <img className="icon-description" src={`${data.weather[0].description == 'céu limpo' ? clearSky 
                        : `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}`} 
                        alt={`${data.weather.description} icon`} />
                         <p>Ventos de: <strong>{data.wind.speed}km/h</strong></p>
                         <p>Nascer do sol:</p>
                         <strong>{formatUnixTime(data.sys.sunrise)}</strong>
                         <p>Pôr do sol:</p>
                         <strong>{formatUnixTime(data.sys.sunset)}</strong>
                         <div>
                          <img src={`https://flagsapi.com/${data.sys.country}/flat/64.png`} alt={`${data.sys.country} flag`} />
                         </div>
                      </div>
          </div>
            ))}
        </div>
      )}
    </section>
  );
}
