const chart = LightweightCharts.createChart(
    document.getElementById("chart"),
    {
        width: window.innerWidth,
        height: 500
    }
);

const candleSeries = chart.addCandlestickSeries();

candleSeries.setData([
{
time: 1710000000,
open:4100,
high:4120,
low:4090,
close:4110
},
{
time:1710000060,
open:4110,
high:4130,
low:4100,
close:4125
}
]);
