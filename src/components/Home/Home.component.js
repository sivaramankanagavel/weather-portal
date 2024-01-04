import React, { useState } from "react";
import WeatherTable from "../Weather-Table/WeatherTable.component";

import "./home.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherReport } from "../../redux-toolkit/slice/weather.slice";

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
            <WeatherTable
                data={{
                    city: weather?.name,
                    temperature: ((Number(weather?.main?.temp) - 32) * 5 / 9),
                    windspeed: weather?.wind?.speed
                }}
            />
            <label>ENTER CITY NAME: </label>
            <input type="text" name="cityname" value={cityName.cityname} onChange={handleChange} />
            <button onClick={handleApiRequest}>Get Weather Report</button>
        </div>
    )
}

export default Home;