import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "../slice/signup.slice";
import signInSlice from "../slice/signin.slice";
import weatherSlice from "../slice/weather.slice";
import citySlice from "../slice/cities.slice";

const store = configureStore({
    reducer: {
        signUp: signupSlice.reducer,
        signIn: signInSlice.reducer,
        weather: weatherSlice.reducer,
        city: citySlice.reducer
    }
})

export default store