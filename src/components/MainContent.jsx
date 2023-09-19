import PropTypes from "prop-types";
import Welcome from "./Welcome";
import clearSky from "../../public/images/clear-sky.png";

MainContent.propTypes = {
  results: PropTypes.array,
};
let temp;
const textColor = temp > 28 ? 'red' : 'blue';

export default function MainContent({ results }) {
  return (
    <main className="main-content">
      <div className="content">
        {results.length === 0 ? <Welcome /> : 
        results.map((data) => (
          <>
          <div
          key={data.id}
          className="information"
          >
          <div className="info-temp">
            <h2>{data.name}</h2>
            <p>Temperatura:</p>
            <p><span style={{ color: textColor }}>{temp = data.main.temp}</span> ºC</p>
            <p>Sensação térmica:</p>
            <p><strong>{data.main.feels_like}</strong></p>
            <p>maxima de:</p>
            <p><strong>{data.main.temp_max}</strong></p>
            <p>Minima de:</p>
            <p><strong>{data.main.temp_min}</strong></p>
          </div>
          <div className="highlights">
            <p>Umidade: <strong>{data.main.humidity}%</strong></p>
            <p><strong>{data.weather[0].description}</strong></p>
            <img
            className="icon-description"
             src={`${data.weather[0].description == 'céu limpo' ? clearSky :
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}`}
              alt={`${data.weather[0].description}icon`} />
            <p>Ventos de: <strong>{data.wind.speed}km/h</strong></p>
            <div className="country">
              <img src={`https://flagsapi.com/${data.sys.country}/flat/64.png`} alt="" />
            </div>
          </div>
          </div>
          </>
        ))}
      </div>
    </main>
  );
}
