import { NavLink, Link } from "react-router-dom"
import "./support.css"
import mail from "./Assets/mail.svg"
import back from "./Assets/back.svg"
import phone from "./Assets/phone.svg"
import email from "./Assets/email1.svg"
import chat from "./Assets/chat.svg"

function Support() {
    {/*this function will remove the iamActive class from the navbar when it goes back to the homepage*/}
    function removeIamActiveClass() {
        document.querySelector(".navbar .iamActive").classList.remove("iamActive");
    }

    return (
        <div className="support">
            <section className="support-nav">
                <h1>Customer Support</h1>
                <NavLink className="support-link1">
                    <img src={mail} key="image"/>
                    <p key="p">Talk to us</p>
                </NavLink>
            </section>
            <section className="support-main">
                {/*this Link goes back to the homepage but calls the removeIamActiveClass function to remove the iamActive state so that the navbar can be rendered */}
                <NavLink 
                    className="back"
                    to="../" 
                    onClick={removeIamActiveClass}
                >
                    <img src={back} />
                </NavLink>

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
                <div className="line">
                    <hr />
                </div>

                <div className="phone-support">
                    <h3>Phone Support</h3>
                    <div className="phone-1">
                        <img src={phone}/>
                        <div className="phone-inner">
                            <h5>Telephone</h5>
                            <p>
                                call us toll-free at 1-800-FOREX.
                            </p>
                            <p>
                                Our support team is available 24/7 to assist you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <hr />
                </div>

                <div className="online-support">
                    <div className="online-1">
                        <img src={email}/>
                        <div className="online-inner">
                            <h5>EMAIL</h5>
                            <p>
                                send us an email at support@forex.com. We
                                aim to respond to all inquiries within 24 hours
                            </p>
                        </div>
                    </div>
                    <div className="onlin-2">
                        <img src={chat}/>
                        <div className="onlin-inner">
                            <h5>LIVE CHAT</h5>
                            <p>
                                Click here to chat with a representation in real-time.
                            </p>
                            <p>
                                Our live chat services is available 24/7 for your convenience
                            </p>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <hr />
                </div>

            <section className="support-buttons">
                <Link className="create" to="">
                    <p>Create Account</p>
                    <p>Join us Today</p>
                </Link>

                <Link className="login" to="">
                    <p>MEMBER LOGIN</p>
                    <p>Welcome back</p>
                </Link>
            </section>
            </section>
        </div>
    )
}

export default Support