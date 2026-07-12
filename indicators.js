// indicators.js

function calculateEMA(prices, period) {
    const k = 2 / (period + 1);

    let ema = [prices[0]];

    for (let i = 1; i < prices.length; i++) {
        ema.push(prices[i] * k + ema[i - 1] * (1 - k));
    }

    return ema;
}

// Contoh penggunaan
const samplePrices = [
3400,3402,3404,3406,3408,3410,3409,3412,3415,3417,
3418,3420,3419,3422,3424,3426,3425,3428,3430,3432
];

const ema20 = calculateEMA(samplePrices,20);

console.log("EMA20:",ema20);
// ===========================
// RSI
// ===========================

function calculateRSI(prices, period = 14) {

    let gains = 0;
    let losses = 0;

    for (let i = 1; i <= period; i++) {

        const change = prices[i] - prices[i - 1];

        if (change >= 0) {
            gains += change;
        } else {
            losses -= change;
        }

    }

    let avgGain = gains / period;
    let avgLoss = losses / period;

    let rsi = [];

    for (let i = period + 1; i < prices.length; i++) {

        const change = prices[i] - prices[i - 1];

        if (change >= 0) {
            avgGain = ((avgGain * (period - 1)) + change) / period;
            avgLoss = ((avgLoss * (period - 1))) / period;
        } else {
            avgGain = ((avgGain * (period - 1))) / period;
            avgLoss = ((avgLoss * (period - 1)) - change) / period;
        }

        const rs = avgGain / avgLoss;

        rsi.push(100 - (100 / (1 + rs)));

    }

    return rsi;

}

const rsi14 = calculateRSI(samplePrices);

console.log("RSI:", rsi14);
// ===========================
// MACD
// ===========================

function calculateMACD(prices) {

    const ema12 = calculateEMA(prices, 12);
    const ema26 = calculateEMA(prices, 26);

    let macd = [];

    for (let i = 0; i < ema26.length; i++) {
        macd.push(ema12[i] - ema26[i]);
    }

    const signal = calculateEMA(macd, 9);

    let histogram = [];

    for (let i = 0; i < signal.length; i++) {
        histogram.push(macd[i] - signal[i]);
    }

    return {
        macd,
        signal,
        histogram
    };

}

const macd = calculateMACD(samplePrices);

console.log(macd);
// ===========================
// Bollinger Bands
// ===========================

function calculateBollingerBands(prices, period = 20, multiplier = 2) {

    let upper = [];
    let middle = [];
    let lower = [];

    for (let i = period - 1; i < prices.length; i++) {

        const slice = prices.slice(i - period + 1, i + 1);

        const mean = slice.reduce((a, b) => a + b, 0) / period;

        const variance = slice.reduce((sum, value) => {
            return sum + Math.pow(value - mean, 2);
        }, 0) / period;

        const std = Math.sqrt(variance);

        middle.push(mean);
        upper.push(mean + multiplier * std);
        lower.push(mean - multiplier * std);
    }

    return {
        upper,
        middle,
        lower
    };
}

const bb = calculateBollingerBands(samplePrices);

console.log(bb);
// ===========================
// ATR
// ===========================

function calculateATR(highs, lows, closes, period = 14) {

    let trueRanges = [];

    for (let i = 1; i < highs.length; i++) {

        const tr = Math.max(
            highs[i] - lows[i],
            Math.abs(highs[i] - closes[i - 1]),
            Math.abs(lows[i] - closes[i - 1])
        );

        trueRanges.push(tr);
    }

    return calculateEMA(trueRanges, period);

}

// Data contoh
const sampleHigh = [
3405,3407,3408,3410,3412,3415,3413,3418,3420,3422,
3423,3425,3424,3428,3430,3432,3431,3434,3436,3438
];

const sampleLow = [
3398,3400,3402,3404,3405,3408,3406,3410,3412,3414,
3415,3418,3417,3420,3422,3424,3423,3426,3428,3430
];

const atr = calculateATR(sampleHigh, sampleLow, samplePrices);

console.log("ATR:", atr);
