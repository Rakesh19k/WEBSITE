import React from 'react';
import "./CSS/BodyCenter.css";
import Logo from "./Images/slack.png"

function BodyCenter() {
    return (
        <div>
            <div className="container body_center">
                <div className="body_center_header">
                    <h1>Simple, transparent pricing</h1>
                    <span>No contracts. No Surprise fees.</span>
                </div>
                <hr />
                <div className="btn_groups">
                    <button className="active_btn">Business</button>
                    <button className="unactive_btn">Individual</button>
                </div>

                <div className="card_features">
                    <div className="card_features_text">
                        <h2>Card Features</h2>
                        <span>Lorem Ipsum is not simply random text</span>
                    </div>

                    <div className="card_features_cards">
                        <div className="card_yellow_div">
                            <div className="card_yellow">
                                <img src={Logo} alt="" style={{ height: 20 }} />
                                <h3>Simple</h3>
                            </div>
                            <div className="card_money">
                                <h3><span>₹0</span>/month</h3>
                            </div>
                        </div>

                        <div className="card_blue_div">
                            <div className="card_blue">
                                <img src={Logo} alt="" style={{ height: 20 }} />
                                <h3>classic</h3>
                            </div>
                            <div className="card_money">
                                <h3><span>₹199</span>/month</h3>
                            </div>
                        </div>

                        <div className="card_black_div">
                            <div className="card_black">
                                <img src={Logo} alt="" style={{ height: 20 }} />
                                <h3>Premium</h3>
                            </div>
                            <div className="card_money">
                                <h3><span>₹299</span>/month</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card_tables">
                    <div className="card_table" style={{ backgroundColor: "#F2F4F5" }}>
                        <h3>Combine your cards in one</h3>
                        <div className="table">
                            <span className="yellow"></span>
                            <span className="blue"></span>
                            <span className="black"></span>
                        </div>
                    </div>

                    <div className="card_table">
                        <h3>Secure iOS and android app</h3>
                        <div className="table">
                            <span className="yellow"></span>
                            <span className="blue"></span>
                            <span className="black"></span>
                        </div>
                    </div>

                    <div className="card_table" style={{ backgroundColor: "#F2F4F5" }}>
                        <h3>Curve customer protection up to ₹ 100,000</h3>
                        <div className="table">
                            <span className="yellow"></span>
                            <span className="blue"></span>
                            <span className="black"></span>
                        </div>
                    </div>

                    <div className="card_table">
                        <h3>Go Back in Time: Move 90-day old payments</h3>
                        <div className="table">
                            <span className="yellow"></span>
                            <span className="blue"></span>
                            <span className="black"></span>
                        </div>
                    </div>

                    <div className="card_table" style={{ backgroundColor: "#F2F4F5" }}>
                        <h3>Curve customer protection up to ₹ 100,000</h3>
                        <div className="table">
                            <span className="yellow"></span>
                            <span className="blue"></span>
                            <span className="black"></span>
                        </div>
                    </div>
                    <div className="card_table">
                        <h3>Yofo Cash: 1% Cashback</h3>
                        <div className="table">
                            <span>3 Selected Retailers (For 90 Days)</span>
                            <span>3 Selected Retailers (Unlimited Time)</span>
                            <span>3 Selected Retailers (Unlimited Time)</span>
                        </div>
                    </div>


                    <div className="card_table" style={{ backgroundColor: "#F2F4F5" }}>
                        <h3>Access to fair FX rates</h3>
                        <div className="table">
                            <span>Accessup to ₹ 500/month</span>
                            <span>Unlimited Access</span>
                            <span>Unlimited Access</span>
                        </div>
                    </div>

                    <div className="card_table">
                        <h3>Worldwide travel insurance</h3>
                        <div className="table">
                            <span></span>
                            <span className="blue"></span>
                            <span className="black"></span>
                        </div>
                    </div>

                    <div className="card_table" style={{ backgroundColor: "#F2F4F5" }}>
                        <h3>Mobile phone insurance</h3>
                        <div className="table">
                            <span></span>
                            <span></span>
                            <span className="black"></span>

                        </div>
                    </div>

                    <div className="card_table">
                        <h3>Worldwide airport loungekey access</h3>
                        <div className="table">
                            <span></span>
                            <span></span>
                            <span className="black"></span>

                        </div>
                    </div>

                    <div className="card_table" style={{ backgroundColor: "#F2F4F5" }}>
                        <h3>Rental car collision insurance</h3>
                        <div className="table">
                            <span></span>
                            <span></span>
                            <span className="black"></span>
                        </div>
                    </div>
                </div>

                <div className="order_btn_groups">
                    <button className="order_btn_active">Order in App</button>
                    <button style={{ backgroundColor: "white" }}>Order in App</button>
                    <button style={{ backgroundColor: "white" }}>Order in App</button>
                </div>
               
            </div>


        </div>
    )
}

export default BodyCenter
