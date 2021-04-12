import React from 'react'
import "./CSS/FooterBody.css";
import Logo from "./Images/slack.png"

function FooterBody() {
    return (
        <div className="footer_body container">
            <div className="footer_top_items">
                <div className="footer_item">
                    <img src={Logo} alt="" style={{ height: 35 }} />
                    <h3>Download latest version of the app.</h3>
                </div>
                <div className="btn_groups2">
                    <div className="btn">
                        <span></span>
                        <h4>App Store</h4>
                    </div>

                    <div className="btn">
                        <span></span>
                        <h4>Google Play</h4>
                    </div>
                </div>
            </div>
            <hr />

            <div className="footer_bottom">
                <div className="footer_bottom_item">
                    <h4>Contact Us</h4>
                    <p>Call. 1.800.123.4567</p>
                    <p>E. info@dummy.com</p>
                </div>
                <div className="footer_bottom_item">
                    <h4>Quick Link</h4>
                    <p>Company</p>
                    <p>Product feature</p>
                    <p>Price</p>
                    <p>How it Works</p>
                </div>
                <div className="footer_bottom_item">
                    <h4>Support</h4>
                    <p>Community</p>
                    <p>Help</p>
                    <p>Contact</p>
                </div>
                <div className="footer_bottom_item">
                    <h4>Get Social</h4>
                    <div className="get_soicle">
                        <p>G</p>
                        <p>F</p>
                        <p>L</p>
                        <p>I</p>
                    </div>
                </div>
            </div>
            <span>© Yofo 2021. All rights reserved.</span>
        </div>
    )
}

export default FooterBody
