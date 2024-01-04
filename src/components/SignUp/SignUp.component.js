import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignUp } from "../../redux-toolkit/slice/signup.slice";

import "./signup.style.scss";

const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function SignUp() {
    const [formField, setFormField] = useState(initialState);
    const signUpDone = useSelector(state=> state.signUp.isSignUp)
    const signUpData = useSelector(state=> state.signUp.signUpData)
    const dispatch = useDispatch()
    const { displayName, email, password, confirmPassword } = formField;

    console.log(signUpDone, signUpData)

    // Take care of the instant changes from input field

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

    // take care of submit the sign up form

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === confirmPassword) {

            try {
                dispatch(getSignUp(email, password, displayName))
                resetField()
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="sign-up-container">
            <form onSubmit={handleSubmit}>
                <div className="section-1">
                    <label htmlFor="email">NAME:</label>
                    <input
                        type="text"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                    />
                </div>
                <div className="section-2">
                    <label htmlFor="email">EMAIL ID:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div className="section-3">
                    <label htmlFor="password">PASSWORD:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div className="section-4">
                    <label htmlFor="email">CONFIRM PASSWORD:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={handleChange}
                        value={confirmPassword}
                    />
                </div>
                <div className="section-5">
                    <button type="submit">SIGN UP</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;