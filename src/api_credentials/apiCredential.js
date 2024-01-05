/*
1. API Key (key):
A string representing the API key required for accessing the OpenWeatherMap API.

2. Base URLs:
baseUrlOfGeoLocation:
Base URL for accessing geographical location data from the OpenWeatherMap API.

baseApiForCurrentWeather:
Base URL for accessing current weather data from the OpenWeatherMap API.

basUrlForCityName:
Base URL for reverse geocoding, used to get city information based on geographical coordinates.

3. Weather Icon URL (weatherIconUrl):
Base URL for accessing weather icons from the OpenWeatherMap API. 
*/

export const apiDetails = {
    key: "0a4cf6d826c3e7c6b8c49b8029fc9f73",
    baseUrlOfGeoLocation: "http://api.openweathermap.org/geo/1.0/direct?",
    baseApiForCurrentWeather: "https://api.openweathermap.org/data/2.5/weather?",
    basUrlForCityName: "http://api.openweathermap.org/geo/1.0/reverse?",
    weatherIconUrl: "http://openweathermap.org/img/w/"
}