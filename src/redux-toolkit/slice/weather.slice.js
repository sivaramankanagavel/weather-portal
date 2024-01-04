import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiDetails } from "../../api_credentials/apiCredential";
import axios from "axios";

const initialState = {
    loading: false,
    weatherReport: {},
    dataStatus: ''
}

const weatherSlice = createSlice({
    name: "weather",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherReport.pending, (state, action) => {
                state.loading = true
            })

            .addCase(getWeatherReport.fulfilled, (state, action) => {
                state.weatherDetails = action.payload
                state.loading = false
            })

            .addCase(getWeatherReport.rejected, (state, action) => {
                state.dataStatus = "API Failed";
            })
    }
})

export const weatheActions = weatherSlice.actions;
export default weatherSlice;

export const getWeatherReport = createAsyncThunk("weather/get", async (city = "Bangalore") => {
    const weatherCity = await axios.get(`${apiDetails.baseApiForCurrentWeather}q=${city}&limit=2&appid=${apiDetails.key}`);
    const weatherCityResult = await weatherCity.data;
    return weatherCityResult
})