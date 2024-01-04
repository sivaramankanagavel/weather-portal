import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignIn } from "../../redux-toolkit/slice/signin.slice";

import "./signin.style.scss";

const initialState = {
    email: "",
    password: ""
}

function SignIn() {
    const [formField, setFormField] = useState(initialState)
    const dispatch = useDispatch()
    const signInSuccess = useSelector((state) => state.signIn.isSignIn)
    const signInCredential = useSelector((state) => state.signIn.signInCredential)
    const { email, password } = formField

    console.log(signInSuccess, signInCredential)

    const handleChange = (event) => {
        const { name, value } = event?.target;

        setFormField({
            ...formField,
            [name]: value
        })
    }

    const resetField = () => {
        setFormField(initialState)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            dispatch(getSignIn(email, password))
            resetField()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit}>
                <div className="section-1">
                    <label htmlFor="email">EMAIL ID:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div className="section-2">
                    <label htmlFor="password">PASSWORD:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div className="section-3">
                    <button type="submit">SIGN IN</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn