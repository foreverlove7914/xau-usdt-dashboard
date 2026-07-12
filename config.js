// config.js

const CONFIG = {
    exchange: "Binance",
    category: "linear",
    symbol: "XAUTUSDT",

    websocket: "wss://fstream.binance.com/ws/xauusdt@trade",

    intervals: [
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

    emaFast: 20,
    emaSlow: 50,
    emaLong: 200,

    rsi: 14,
    atr: 14,
    macdFast: 12,
    macdSlow: 26,
    macdSignal: 9
};
