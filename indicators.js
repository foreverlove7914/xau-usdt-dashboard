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
