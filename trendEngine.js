// trendEngine.js

function getTrendScore({
    ema20,
    ema50,
    ema200,
    rsi,
    macd,
    macdSignal
}) {

    let score = 0;

    // EMA
    if (ema20 > ema50) score += 20;
    if (ema50 > ema200) score += 20;

    // RSI
    if (rsi > 55) score += 20;
    if (rsi < 45) score -= 20;

    // MACD
    if (macd > macdSignal) score += 20;
    if (macd < macdSignal) score -= 20;

    // Trend
    if (score >= 60) return "🟢 STRONG BUY";
    if (score >= 20) return "🟢 BUY";
    if (score <= -60) return "🔴 STRONG SELL";
    if (score <= -20) return "🔴 SELL";

    return "🟡 NEUTRAL";
}
