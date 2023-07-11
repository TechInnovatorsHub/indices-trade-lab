import { Link } from "react-router-dom"
import "./support.css"
import Ellipse from "../../assets/images/Ellipse.png";

function Support() {
    return (
        <div className="support">
            <section className="support-nav">
                <h1>Customer Support</h1>
<<<<<<< HEAD
                <img src="./Assets/mail.svg"/>
=======
                <div>
                    <img src={Ellipse} />
                </div>
>>>>>>> cd34b52ca4259d1b57d793bad145e1d1a982618b
            </section>
            <section className="-support-main">
                <Link to="..">back</Link>
                <div className="support-contact">
                    <h3>Contact us:</h3>
                    <p>
                        If you need assistance, our Customer support team
                        is here to help.
                    </p>
                    <p>
                        You can reach us through the following channels;
                    </p>
                </div>
                <hr />
                <div className="phone-support">
                    <h3>Phone Support</h3>
                    <p>pic</p>
                    <h5>Telephone</h5>
                    <p>
                        call us toll-free at 1-800-FOREX.
                    </p>
                    <p>
                        Our support team is available 24/7 to assist you.
                    </p>
                </div>
                <hr />
                <div className="online-support">
                    <p>pic</p>
                    <h5>EMAIL</h5>
                    <p>
                        send us an email at support@forex.com. We
                        aim to respond to all inquiries within 24 hours
                    </p>
                    <p>pic</p>
                    <h5>LIVE CHAT</h5>
                    <p>
                        Click here to chat with a representation in real-time.
                    </p>
                    <p>
                        Our live chat services is available 24/7 for your convenience
                    </p>
                </div>
                <hr />
            </section>
            <section className="support-buttons">
                <Link to="">
                    <p>Create Account</p>
                    <p>Join us Today</p>
                </Link>

                <Link to="">
                    <p>MEMBER LOGIN</p>
                    <p>Welcome back</p>
                </Link>
            </section>
        </div>
    )
}

export default Support