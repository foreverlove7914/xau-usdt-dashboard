// smartMoney.js

function detectBOS(highs) {

    if (highs.length < 3) return false;

    return highs[highs.length - 1] >
           highs[highs.length - 2];

}

function detectCHOCH(highs, lows) {

    if (highs.length < 3) return false;

    const higherHigh =
        highs[highs.length - 1] >
        highs[highs.length - 2];

    const lowerLow =
        lows[lows.length - 1] <
        lows[lows.length - 2];

    return higherHigh && lowerLow;

}

function marketStructure(highs, lows) {

    return {

        BOS: detectBOS(highs),

        CHOCH: detectCHOCH(highs, lows)

    };

}
