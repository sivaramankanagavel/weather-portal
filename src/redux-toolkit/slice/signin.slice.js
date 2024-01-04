import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPasswordFunc } from "../../firebase/firebase.config";

const intialState = {
    isSignIn: false,
    signInCredential: {}
}

const signInSlice = createSlice({
    name: "signin",
    initialState: intialState,
    reducers: {
        signIn(state, action) {
            if (action.payload !== null) {
                state.isSignIn = true
                state.signInCredential = action.payload
            }
            else {
                state.isSignIn = false
            }
        },
        isNotSignIn(state, action) {
            state.isSignIn = false
        }
    }
})

const { signIn, isNotSignIn } = signInSlice.actions;
export default signInSlice;

export function getSignIn(email, password) {
    return async function getSignInThunk(dispatch, getState) {
        await signInWithEmailAndPasswordFunc(email, password)
            .then((UserCredentialImpl) => dispatch(signIn(UserCredentialImpl))).catch(() => dispatch(isNotSignIn()))
    }
}