import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

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
        <section style={{ backgroundColor: "#87CEEB", width: "25%", height: "100%" }}>
            <MDBContainer className="h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="8" lg="6" xl="4">
                        <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex">
                                    <MDBTypography tag="h6" className="flex-grow-1">
                                        {city}
                                    </MDBTypography>
                                    <MDBTypography tag="h6">15:07</MDBTypography>
                                </div>

                                <div className="d-flex flex-column text-center mt-5 mb-4">
                                    <MDBTypography
                                        tag="h6"
                                        className="display-4 mb-0 font-weight-bold"
                                        style={{ color: "#1C2331" }}
                                    >
                                        {" "}
                                        {temperature}°C{" "}
                                    </MDBTypography>
                                    <span className="small" style={{ color: "#868B94" }}>
                                        {description}
                                    </span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                        <div>
                                            <MDBIcon
                                                fas
                                                icon="wind fa-fw"
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> {windspeed} km/h</span>
                                        </div>
                                        <div>
                                            <MDBIcon
                                                fas
                                                icon="tint fa-fw"
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 84% </span>
                                        </div>
                                        <div>
                                            <MDBIcon
                                                fas
                                                icon="sun fa-fw"
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 0.2h </span>
                                        </div>
                                    </div>
                                    <div>
                                        {getWeatherIcon(icon)}
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}