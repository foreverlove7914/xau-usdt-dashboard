const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
    width: window.innerWidth,
    height:400,
    layout:{
        background:{color:"#111827"},
        textColor:"#ffffff"
    },
    grid:{
        vertLines:{color:"#1f2937"},
        horzLines:{color:"#1f2937"}
    }
});

const candleSeries = chart.addCandlestickSeries();

let data = [
{
time:"2026-07-12",
open:4100,
high:4115,
low:4095,
close:4108
},
{
time:"2026-07-13",
open:
