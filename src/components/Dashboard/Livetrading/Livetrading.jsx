import { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

const Livetrading = () => {
  const onLoadScriptRef = useRef();

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
  );

  return (
    <>
      <div className='tradingview-widget-container outline-none'>
        <div id='tradingview_44083' className='h-[500px] w-[70%] ml-10 mt-4'/>
      </div>
    </>

  );
}

export default Livetrading;
