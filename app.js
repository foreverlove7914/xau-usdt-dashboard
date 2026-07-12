const livePrice = document.getElementById("livePrice");
const status = document.getElementById("status");

const chart = LightweightCharts.createChart(
    document.getElementById("chart"),
    {
        width: window.innerWidth,
        height: 500,
        layout: {
            background: { color: "#111827" },
            textColor: "#ffffff"
        },
        grid: {
            vertLines: { color: "#2d3748" },
            horzLines: { color: "#2d3748" }
        }
    }
);

const candleSeries = chart.addCandlestickSeries();

status.innerHTML = "Waiting for market data...";

// Contoh data sementara
candleSeries.setData([
    { time: 1710000000, open: 3400, high: 3405, low: 3395, close: 3402 },
    { time: 1710003600, open: 3402, high: 3410, low: 3400, close: 3408 }
]);

livePrice.innerHTML = "Loading...";
ws.onmessage = (event) => {

    const msg = JSON.parse(event.data);

    if (msg.data) {

        document.getElementById("livePrice").innerHTML =
            "Price : " + msg.data.lastPrice;

    }

};
