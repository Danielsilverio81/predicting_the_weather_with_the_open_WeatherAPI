import PropTypes from "prop-types";

NextDayInformation.propTypes = {
    nextDayInfo: PropTypes.array
}

let temp;
const textColor = temp > 28 ? 'red' : 'blue';
const dataFormat = (dataString) => {
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const data = new Date(dataString)
  const dayWeek = days[data.getDay()]
  const dayMonth = data.getDate()
  const hours = data.toLocaleTimeString('pt-BR')

  return `${dayWeek} ${dayMonth} ${hours}`
}

const formatWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export default function NextDayInformation({nextDayInfo}) {
  return (
    <div  className="nextDay-content fade-in">
        {nextDayInfo.map(item => (
            <div
            key={item.dt}
            >
                 <div className="other-elements-info">
                       <div className="info-temp">
                        <strong>{dataFormat(item.dt_txt)}</strong> 
                        <p><strong style={{ color: textColor }}>{temp = item.main.temp}</strong> ºC</p> 
                        <p>Max: <strong>{item.main.temp_max}</strong></p> 
                        <p>Min:<strong>{item.main.temp_min}</strong></p>
                        <p><strong>{formatWord(item.weather[0].description)}</strong></p>
                        </div>
                    </div>
            </div>
        ))}
    </div>
  )
}
