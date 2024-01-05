import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherReport, weatherReportAll } from "../../redux-toolkit/slice/weather.slice";
import WeatherCard from "../WeatherCard/WeatherCard.component";

import "./home.style.scss";

function Home() {
    const [cityName, setCityName] = useState({ cityname: "" })
    const dispatch = useDispatch()
    const weather = useSelector((state) => state.weather.weatherReport)
    const isSignIn = useSelector((state) => state.signIn.isSignIn)
    const favCityDetails = useSelector((state) => state.city.userCityDetails)
    const allFavCities = useSelector((state) => state.weather.weatherReportAll)

    const handleChange = (event) => {
        const { name, value } = event?.target;

        setCityName({
            ...cityName,
            [name]: value
        })
    }

    useEffect(() => {
        if (isSignIn === true) {
            favCityDetails.map((city) => {
                dispatch(weatherReportAll(city))
            })
        }
    }, [isSignIn])

    const handleApiRequest = () => {
        dispatch(getWeatherReport(cityName.cityname))
    }

    return (
        <div className="home-container">
            <label>Enter City Name </label>
            <input type="text" name="cityname" value={cityName.cityname} onChange={handleChange} />
            <button className="weather-button" onClick={handleApiRequest}>Get Weather Report</button>

            {weather && weather.main && weather.weather && weather.weather[0] && (
                <div className="weather-card-withoutSignIn">
                    <WeatherCard
                        data={{
                            city: weather.name,
                            temperature: (Number(weather.main.temp) - 273.15).toFixed(2),
                            windspeed: weather.wind.speed,
                            icon: weather.weather[0].icon,
                            description: weather.weather[0].description
                        }}
                    />
                </div>
            )}
            <div className="allcity-details">
                {
                    isSignIn && allFavCities &&
                    allFavCities.map((weather) => (
                        <WeatherCard
                            data={{
                                city: weather.name,
                                temperature: (Number(weather.main.temp) - 273.15).toFixed(2),
                                windspeed: weather.wind.speed,
                                icon: weather.weather[0].icon,
                                description: weather.weather[0].description
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;