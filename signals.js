// signals.js

function getTrendSignal(price, ema20, ema50, ema200) {

    if (price > ema20 && ema20 > ema50 && ema50 > ema200) {
        return "🟢 STRONG BUY";
    }

    if (price > ema20 && ema20 > ema50) {
        return "🟢 BUY";
    }

    if (price < ema20 && ema20 < ema50 && ema50 < ema200) {
        return "🔴 STRONG SELL";
    }

    if (price < ema20 && ema20 < ema50) {
        return "🔴 SELL";
    }

    return "🟡 SIDEWAYS";
}
