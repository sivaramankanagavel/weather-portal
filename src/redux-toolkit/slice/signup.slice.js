import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPasswordFunc, signInWithEmailAndPasswordFunc } from "../../firebase/firebase.config";

const initialState = {
    isSignUp: false,
    signUpData: {}
}

export const signupSlice = createSlice({
    name: "signup",
    initialState: initialState,
    reducers: {
        signUp(state, action) {
            state.signUpData = action.payload
            state.isSignUp = true
        },
        nonSignUp(state, action) {
            state.isSignUp = false
        }
    }
})

const { signUp, nonSignUp } = signupSlice.actions;

export function getSignUp(email, password, displayName) {
    return async function getSignUpThunk(dispatch, getState) {
        createUserWithEmailAndPasswordFunc(email, password, displayName)
            .then((result) => dispatch(signUp(result))).catch(() => dispatch(nonSignUp()))
    }
}
