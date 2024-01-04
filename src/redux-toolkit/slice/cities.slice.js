import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cities: [],
    alreadyAdded: false
}

const citySlice = createSlice({
    name: "favCity",
    initialState: initialState,
    reducers: {
        addCity(state, action) {
            if (state.cities.length === 0) {
                state.cities.push(action.payload)
            }
            else {
                if (state.cities.includes(action.payload)) {
                    state.alreadyAdded = true
                }
                else {
                    if (!state.cities.includes(action.payload)) {
                        state.cities.push(action.payload)
                    }
                }
            }
        },
        removeCity(state, action) {
            const newCity = state.cities.filter((city, index) => index !== action.payload)
            state.cities = newCity
        }
    }
})

export const cityActions = citySlice.actions;
export default citySlice;