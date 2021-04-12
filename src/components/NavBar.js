import React from 'react'
import "./CSS/NavBar.css";
import Logo from "./Images/slack.png"

function NavBar() {
    return (
        <div className="header">

            <div className="header_left">
                <img src={Logo} alt="" style={{ height: 35 }} />
            </div>

            <div className="header_right">
                <h4>Home</h4>
                <h4 style={{ color: "#00AFEF"}}>Cards</h4>
                <h4>Features</h4>
                <h4>About</h4>
                <h4>Contact</h4>
                <span className="subs_now">Subscribe Now</span>
            </div>
        </div>
    )
}

export default NavBar



