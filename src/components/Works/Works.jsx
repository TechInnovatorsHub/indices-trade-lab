// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./works.css";
import a from '../../assets/images/works_image/1.png'
import b from '../../assets/images/works_image/2.png'
import c from '../../assets/images/works_image/3.png'

function Works() {
    return (
        <div className='main-works'>
            <button className='works_trade'>Trade Now</button>
           <div className='heading'>
            <h1>How it Works</h1>
           </div>
           <div className='Hcards'>
                <div className="cards">
                    <h1>Deposit</h1>
                    <img src= {a}/>
                    <p>Open real account and add funds. We work with more than 20 payment systems.</p>
                </div>
                <div className="cards">
                    <h1>Trade</h1>
                    <img src= {b}/>
                    <p>Trade any of 100 assets and stocks. Use technical analysis and trade the news</p>
                </div>
                <div className="cards">
                    <h1>Withdraw</h1>
                    <img src= {c}/>
                    <p>Get funds easily to your bank card or e-wallet. We take no commission.</p>
                </div>

            </div>
            <div className='signals'>
                    <div className='currency1'>
                    <div className='Cname'>
                        <div className='flag'>
                        <svg>
                        </svg>
                            <h4>USD/JPY <br/> USD/JPY </h4>
                        </div>
                        <p className='rise'>+0.24</p>
                        <div>
                            <button className='sell'>Sell</button>
                            <button className='buy'>Buy</button>
                        </div>
                    </div>
                    <div className='Cname'>
                    <div className='flag'>
                        <svg>
                        </svg>
                            <h4>USD/JPY <br/> USD/JPY </h4>
                            </div>
                            <p className='fall'>-0.84</p>
                            <div>
                            <button className='sell'>Sell</button>
                            <button className='buy'>Buy</button>
                        </div>
                    </div>
                    <div className='Cname'>
                    <div className='flag'>
                        <svg>
                        </svg>
                            <h4>USD/JPY <br/> USD/JPY </h4>
                            </div>
                            <p className='rise'>+0.96</p>
                            <div>
                            <button className='sell'>Sell</button>
                            <button className='buy'>Buy</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default Works;
