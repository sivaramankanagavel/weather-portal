/*
1. Redux Slice Definition (signupSlice):
Name: "signup"
Initial State:
isSignUp: A boolean indicating whether the sign-up process was successful.
signUpData: An object to store information about the signed-up user.

2. Redux Extra Reducers:
Handles asynchronous action (getSignUp) using Redux Toolkit's createAsyncThunk.
Handles pending, fulfilled, and rejected states for the asynchronous action.

3. Async Thunk (getSignUp):

getSignUp:
Attempts to create a new user using the provided email, password, displayName, and favCities.
Calls createUserWithEmailAndPasswordFunc from Firebase.
Returns the created user data.

4. Exported Slice and Async Thunk:
The default export is the created signupSlice, which includes the slice's reducer and actions.
Exported getSignUp async thunk for dispatching the sign-up action. 
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPasswordFunc, signInWithEmailAndPasswordFunc } from "../../firebase/firebase.config";

const initialState = {
    isSignUp: false,
    signUpData: {}
}

export const signupSlice = createSlice({
    name: "signup",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSignUp.pending, (state, action) => {
                state.isSignUp = false
            })

            .addCase(getSignUp.fulfilled, (state, action) => {
                state.signUpData = action.payload
                state.isSignUp = true
            })

            .addCase(getSignUp.rejected, (state, action) => {
                state.isSignUp = false
            })
    }
})

export const getSignUp = createAsyncThunk("signup", async ({ email, password, displayName, favCities }) => {
    const createdUserdata = await createUserWithEmailAndPasswordFunc(email, password, displayName, favCities)
    return createdUserdata
})
