import React from 'react';
import BodyCenter from './BodyCenter';
import "./CSS/BodyPart.css";
import Logo from "./Images/slack.svg"

function BodyPart() {
    return (
        <div>
            <div className="top_body">
                <div className="top_body_text">
                    <h2>Compare Yofo cards and choose
                    the one that works for you.
                </h2>
                </div>
                <div className="top_get_d">
                    <h4>Get Download Link</h4>
                </div>
            </div>
            <div className="center_body">
                <div className="first_circule">
                    <div className="first_cart">
                        <div className="cart_item">
                            <img src={Logo} alt="" style={{ height: 35 }} />
                            <span>..... 043434</span>
                        </div>
                    </div>
                    <div className="first_cart_hover">
                        <div className="first_cart_text">
                            <hr style={{ color: "black" }} />
                            <span />
                            <p>Sunt in culpa qui officia deserunt mollit anim</p>
                            <hr />
                        </div>
                    </div>

                </div>
                <div className="second_circule">
                    <div className="second_cart">
                        <div className="cart_item">
                            <img src={Logo} alt="" style={{ height: 35 }} />
                            <span>..... 043434</span>
                        </div>
                    </div>

                    <div className="second_cart_hover">
                        <div className="second_cart_text">
                            <hr style={{ color: "black" }} />
                            <span />
                            <p>Sunt in culpa qui officia deserunt mollit anim</p>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="third_circule">
                    <div className="third_cart">
                        <div className="cart_item">
                            <img src={Logo} alt="" style={{ height: 35 }} />
                            <span>..... 043434</span>
                        </div>
                    </div>

                    <div className="third_cart_hover">
                        <div className="third_cart_text">
                            <hr style={{ color: "black" }} />
                            <span />
                            <p>Sunt in culpa qui officia deserunt mollit anim</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyPart
