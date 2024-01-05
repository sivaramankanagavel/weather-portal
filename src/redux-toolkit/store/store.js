/*
1. Import Statements:
Imports the necessary functions and slices from Redux and your 
custom slices (signupSlice, signInSlice, weatherSlice, userCitySlice).

2. Redux Store Configuration:
Uses configureStore to create a Redux store.
Combines reducers from different slices using the reducer property.

3. Reducer Composition:
Combines multiple reducers into one using the combineReducers utility function.

4. Default Export:
Exports the configured Redux store. 
*/

import { configureStore } from "@reduxjs/toolkit";
import { signupSlice } from "../slice/signup.slice";
import signInSlice from "../slice/signin.slice";
import weatherSlice from "../slice/weather.slice";
import userCitySlice from "../slice/cities.slice";

const store = configureStore({
    reducer: {
        signUp: signupSlice.reducer,
        signIn: signInSlice.reducer,
        weather: weatherSlice.reducer,
        city: userCitySlice.reducer,
    }
})

export default store