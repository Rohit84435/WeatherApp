import "./current-weather.css";

function Currentweather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          {/* s{console.log({ data })} */}
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°c</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°c
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> {data.wind.speed} m/s </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> {data.main.humidity} % </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> {data.main.pressure} hpa </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currentweather;
