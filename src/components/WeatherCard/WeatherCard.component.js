import React from "react";
import {
    WiDaySunny,
    WiCloudy,
    WiDayCloudy,
    WiRain,
    WiThunderstorm,
    WiSnow,
    WiFog,
} from 'react-icons/wi';

export default function WeatherCard({ data }) {

    const { city, temperature, windspeed, icon, description } = data;

    const getWeatherIcon = (id) => {
        switch (id) {
            case '01d':
                return <WiDaySunny />;
            case '02d':
                return <WiDayCloudy />;
            case '03d':
            case '04d':
                return <WiCloudy />;
            case '09d':
            case '10d':
                return <WiRain />;
            case '11d':
                return <WiThunderstorm />;
            case '13d':
                return <WiSnow />;
            case '50d' || '50n':
                return <WiFog />;
            default:
                return null;
        }
    };

    return (
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-sm-12 col-xs-12">
                    <div class="card p-4">
                        <div class="d-flex">
                            <h6 class="flex-grow-1">{city}</h6>
                            <h6>16:08</h6>
                        </div>

                        <div class="d-flex flex-column temp mt-5 mb-3">
                            <h1 class="mb-0 font-weight-bold" id="heading"> {temperature}&deg; C </h1>
                            <span class="small grey">{description}</span>
                        </div>

                        <div class="d-flex">
                            <div class="temp-details flex-grow-1">
                                <p class="my-1">
                                    <img src="https://i.imgur.com/B9kqOzp.png" height="17px" />
                                    <span> {windspeed} km/h  </span>
                                </p>

                                <p class="my-1">
                                    <i class="fa fa-tint mr-2" aria-hidden="true"></i>
                                    <span> 84% </span>
                                </p>

                                <p class="my-1">
                                    <img src="https://i.imgur.com/wGSJ8C5.png" height="17px" />
                                    <span> 0.2h </span>
                                </p>
                            </div>

                            <div>
                                {/* <img src="https://i.imgur.com/Qw7npIg.png" width="100px" /> */}
                                {
                                    getWeatherIcon(icon)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}