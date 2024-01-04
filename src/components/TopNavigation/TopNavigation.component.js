import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./topnavigation.style.scss";

function TopNavigation() {
    const isSignIn = useSelector((state) => state.signIn.isSignIn)
    return (
        <div className="nav-container">
            <Link to={"/"}>HOME</Link>
            <Link to={"/sign-in"}>SIGN IN</Link>
            <Link to={"/sign-up"}>SIGN UP</Link>
            {isSignIn && <Link to={"/add-city"}>ADD CITIES</Link>}
        </div>
    )
}

export default TopNavigation;