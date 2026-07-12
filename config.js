// config.js

const CONFIG = {
  appName: "XAU/USDT Professional Dashboard",
  theme: "dark",

  // Symbol (akan digunakan oleh data feed)
  symbol: "XAUUSD",

  // Timeframes
  timeframes: [
    "1",
    "3",
    "5",
    "15",
    "30",
    "60",
    "240",
    "D",
    "W"
  ],

  indicators: {
    ema: [20, 50, 200],
    rsi: 14,
    macd: {
      fast: 12,
      slow: 26,
      signal: 9
    },
    bb: {
      period: 20,
      deviation: 2
    },
    atr: 14
  }
};
