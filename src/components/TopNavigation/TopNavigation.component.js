import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux-toolkit/slice/signin.slice";

import "./topnavigation.style.scss";

function TopNavigation() {
    const isSignIn = useSelector((state) => state.signIn.isSignIn)
    const dispatch = useDispatch()

    const handleSiginOut = () => {
        dispatch(signOut())
    }
    return (
        <div className="nav-container">
            <Link to={"/"}>HOME</Link>
            {
                isSignIn ? <Link to="/" onClick={handleSiginOut}>SIGN OUT</Link> :
                    <Link to={"/sign-in"}>SIGN IN</Link>
            }
            <Link to={"/sign-up"}>SIGN UP</Link>
            {isSignIn && <Link to={"/add-city"}>ADD CITIES</Link>}
        </div>
    )
}

export default TopNavigation;