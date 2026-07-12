const chart = LightweightCharts.createChart(
    document.getElementById("chart"),
    {
        width: window.innerWidth,
        height: 400,
        layout: {
            background: { color: "#111827" },
            textColor: "#ffffff"
        },
        grid: {
            vertLines: { color: "#1f2937" },
            horzLines: { color: "#1f2937" }
        }
    }
);

const candleSeries = chart.addCandlestickSeries();

const data = [
    {
        time: "2026-07-07",
        open: 4080,
        high: 4100,
        low: 4070,
        close: 4090
    },
    {
        time: "2026-07-08",
        open: 4090,
        high: 4110,
        low: 4085,
        close: 4105
    },
    {
        time: "2026-07-09",
        open: 4105,
        high: 4125,
        low: 4095,
        close: 4120
    },
    {
        time: "2026-07-10",
        open: 4120,
        high: 4135,
        low: 4100,
        close: 4110
    },
    {
        time: "2026-07-11",
        open: 4110,
        high: 4120,
        low: 4090,
        close: 4100
    },
    {
        time: "2026-07-12",
        open: 4100,
        high: 4110,
        low: 4090,
        close: 4105
    },
    {
        time: "2026-07-13",
        open: 4105,
        high: 4120,
        low: 4095,
        close: 4110
    }
];

candleSeries.setData(data);

chart.timeScale().fitContent();

window.addEventListener("resize", () => {
    chart.applyOptions({
        width: window.innerWidth
    });
});
