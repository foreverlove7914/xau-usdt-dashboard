// config.js

const CONFIG = {
    exchange: "Bybit",
    category: "linear",
    symbol: "XAUTUSDT",

    websocket: "wss://stream.bybit.com/v5/public/linear",

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
