import React from "react";
import { Link } from "react-router-dom";

import "./topnavigation.style.scss";

function TopNavigation(){
    return(
        <div className="nav-container">
            <Link to={"/"}>HOME</Link>
            <Link to={"/sign-in"}>SIGN IN</Link>
            <Link to={"/sign-up"}>SIGN UP</Link>
            <Link to={"/add-city"}>ADD CITIES</Link>
        </div>
    )
}

export default TopNavigation;