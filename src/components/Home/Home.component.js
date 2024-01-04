import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherReport } from "../../redux-toolkit/slice/weather.slice";
import WeatherCard from "../WeatherCard/WeatherCard.component";

import "./home.style.scss";

function Home() {
    const [cityName, setCityName] = useState({ cityname: "" })
    const dispatch = useDispatch()
    const weather = useSelector((state) => state.weather.weatherDetails)

    const handleChange = (event) => {
        const { name, value } = event?.target;

        setCityName({
            ...cityName,
            [name]: value
        })
    }

    const handleApiRequest = () => {
        dispatch(getWeatherReport(cityName.cityname))
    }

    return (
        <div className="home-container">
            <label>ENTER CITY NAME: </label>
            <input type="text" name="cityname" value={cityName.cityname} onChange={handleChange} />
            <button onClick={handleApiRequest}>Get Weather Report</button>
            <WeatherCard
                data={{
                    city: weather?.name,
                    temperature: ((Number(weather?.main?.temp) - 32) * 5 / 9),
                    windspeed: weather?.wind?.speed,
                    icon: weather?.weather[0]?.icon,
                    description: weather?.weather[0]?.description
                }}
            />
        </div>
    )
}

export default Home;