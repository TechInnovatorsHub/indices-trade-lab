import React from 'react';
import "./works.css";

function Works() {
    return (
        <div className='main-works'>
           <div className='heading'>
            <h1>How it Works</h1>
           </div>
           <div className='Hcards'>
                <div className="cards">
                    <h1>Deposit</h1>
                    <p>Open real account and add funds. We work with more than 20 payment systems.</p>
                </div> 
                <div className="cards">
                    <h1>Trade</h1>
                    <p>Trade any of 100 assets and stocks. Use technical analysis and trade the news</p>
                </div>
                <div className="cards">
                    <h1>Withdraw</h1>
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
