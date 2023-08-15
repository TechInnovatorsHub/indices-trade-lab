import { useEffect, useRef,useState } from 'react';
import './Livetrading.css'

let tvScriptLoadingPromise;

const Livetrading = () => {
  const [num ,setNum] = useState(10)
  const onLoadScriptRef = useRef()

  

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_44083') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "BITSTAMP:BTCUSD",
            interval: "1",
            timezone: "Etc/UTC",
            theme: 'light',
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_44083"
          });
        }
      }
    },
    []
  )


  return (
    <section className="flex relative w-full bg-none justify-between">
      <div className='tradingview-widget-container outline-none'>
        <div id='tradingview_44083' className='h-[500px] w-[60rem] ml-10 mt-4'/>
      </div>
      <div className="relative right-0">
        <div className="bg-slate-400/20 mr-2 rounded-lg">
          <div className='flex bg-none justify-around mt-4'>
            <button className="p-3 border-2 w-40 rounded-l-lg bg-white hover:bg-slate-500/30 border-r-0">Stake</button>
            <button className="p-3 border-2 w-40 rounded-r-lg bg-white hover:bg-slate-500/30">Payout</button>
          </div>
          <div className="flex justify-around bg-none bg-white rounded-lg w-[19.7rem] ml-[0.2rem]">
            <button className="p-2 text-xl ">-</button>
            <input value={num} className="ml-1 w-10 outline-none"/>
            <select className="h-7 mt-2 rounded-lg">
              <option value="USD">USD</option>
              <option value="USDT">USDT</option>
              <option value="BST">BST</option>
            </select>
            <button className="p-2 text-xl">+</button>
            </div>
            <div className="flex bg-none p-3">
            <input type="checkbox" className="mr-2"/>
            <p className="ml-3 text-lg">Allow equals <span className="opacity-50">&#9432;</span></p>
            </div>
        </div>
        <div className="flex bg-none flex-col"> 
          <div>
            <p>Payout 19.53 usd<span>&#9432;</span></p>
            <button className="inline-flex ">
              <p className="clip-path w-[12rem] bg-sky-400 p-6 rounded-lg h-[4rem]">Rise</p>
              <p className="clip-path-small w-[10rem] bg-sky-600 p-6 absolute left-[7rem] rounded-r-lg h-[4rem]">95.30%</p>
            </button>
          </div>
          <div>
            <p>Payout 19.53 usd<span>&#9432;</span></p>
            <button className="inline-flex ">
              <p className="clip-path w-[12rem] bg-red-400 p-6 rounded-l-lg h-[4rem]">Fall</p>
              <p className="clip-path-small w-[10rem] bg-red-600 p-6 absolute left-[7rem] rounded-r-lg h-[4rem]" >95.30%</p>
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Livetrading;
