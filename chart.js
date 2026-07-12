// chart.js

const chart = LightweightCharts.createChart(
    document.getElementById("chart"),
    {
        width: window.innerWidth,
        height: 550,

        layout: {
            background: {
                color: "#111827"
            },
            textColor: "#d1d4dc"
        },

        grid: {
            vertLines: {
                color: "#1f2937"
            },
            horzLines: {
                color: "#1f2937"
            }
        },

        rightPriceScale: {
            borderColor: "#374151"
        },

        timeScale: {
            borderColor: "#374151",
            timeVisible: true,
            secondsVisible: false
        }
    }
);

const candleSeries = chart.addCandlestickSeries({
    upColor: "#00C853",
    downColor: "#D50000",
    borderVisible: false,
    wickUpColor: "#00C853",
    wickDownColor: "#D50000"
});

// Data contoh sementara
candleSeries.setData([
    {
        time: 1710000000,
        open: 3400,
        high: 3412,
        low: 3398,
        close: 3408
    },
    {
        time: 1710003600,
        open: 3408,
        high: 3418,
        low: 3404,
        close: 3415
    }
]);

window.addEventListener("resize", () => {
    chart.applyOptions({
        width: window.innerWidth
    });
});
