/*
1. Redux Slice Definition (signInSlice):
Name: "signin"
Initial State:
isSignIn: A boolean indicating whether a user is signed in.
signInCredential: An object to store information about the signed-in user.
favCities: An array to store the user's favorite cities.

2. Redux Extra Reducers:
Handles asynchronous actions (getSignIn, signOut) using Redux Toolkit's createAsyncThunk.
Handles pending, fulfilled, and rejected states for each asynchronous action.
Clears user information (isSignIn, signInCredential, favCities) upon signing out.

3. Async Thunks (getSignIn, signOut):

getSignIn:
Attempts to sign in a user using the provided email and password.
Retrieves additional user information (favorite cities) from Firestore.
Returns an object containing userCredential (from Firebase authentication) and favCities.

signOut:
Calls the signoutFunc from Firebase to sign the user out.
Returns the result of the signout operation.

4. Exported Default:
The default export is the created signInSlice, which includes the slice's reducer and actions.
*/


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserDetailsDoc, db, signInWithEmailAndPasswordFunc, signoutFunc } from "../../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

const intialState = {
    isSignIn: false,
    signInCredential: {},
    favCities: [],
}

const signInSlice = createSlice({
    name: "signin",
    initialState: intialState,
    extraReducers: (builder) => {
        builder
            .addCase(getSignIn.pending, (state, action) => {
                state.isSignIn = false
            })
            .addCase(getSignIn.fulfilled, (state, action) => {
                state.signInCredential = action.payload.userCredential.user
                state.favCities = action.payload.favCities
                state.isSignIn = true
            })
            .addCase(getSignIn.rejected, (state, action) => {
                state.isSignIn = false
            })

            .addCase(signOut.fulfilled, (state) => {
                state.isSignIn = false;
                state.signInCredential = {};
                state.favCities = [];
            })


    }
})

export default signInSlice;


export const getSignIn = createAsyncThunk('signin', async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPasswordFunc(email, password)
    const referenceDoc = doc(db, "users", userCredential.user.uid)
    const cityResult = await getDoc(referenceDoc)
    const favCities = cityResult.data().favCities ? cityResult.data().favCities : []
    return { userCredential, favCities }
})

export const signOut = createAsyncThunk("signout", async () => {
    return await signoutFunc()
})