const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
width: window.innerWidth,
height:400,
layout:{
background:{color:"#ffffff"},
textColor:"#000000"
}
}
);

const candleSeries = chart.addCandlestickSeries();

candleSeries.setData([
{
time:"2026-07-12",
open:4100,
high:4110,
low:4090,
close:4105
},
{
time:"2026-07-13",
open:4105,
high:4120,
low:4095,
close:4110
}
]);
