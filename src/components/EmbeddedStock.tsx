// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";

const TradingViewWidget = memo(() => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Asia/Shanghai",
          "theme": "dark",
          "style": "1",
          "locale": "zh_CN",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ flex: 1 }}
    >
      {/* <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://cn.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">在TradingView上跟踪所有市场</span>
        </a>
      </div> */}
    </div>
  );
});

export default TradingViewWidget;
