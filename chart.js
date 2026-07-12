const chartContainer = document.getElementById("chart");

const chart = LightweightCharts.createChart(chartContainer, {
    width: chartContainer.clientWidth,
    height: 350,
    layout: {
        background: { color: "#ffffff" },
        textColor: "#000000",
    },
    grid: {
        vertLines: { color: "#eeeeee" },
        horzLines: { color: "#eeeeee" },
    }
});

const candleSeries = chart.addCandlestickSeries();

let data = [
    { time: "2026-07-12", open: 4100, high: 4110, low: 4095, close: 4105 },
    { time: "2026-07-13", open: 4105, high: 4115, low: 4100, close: 4108 }
];

candleSeries.setData(data);

window.addEventListener("resize", () => {
    chart.applyOptions({
        width: chartContainer.clientWidth
    });
});
