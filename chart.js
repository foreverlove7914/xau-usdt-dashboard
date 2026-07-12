const chartElement = document.getElementById("chart");

if (chartElement) {

const chart = LightweightCharts.createChart(
chartElement,
{
width: chartElement.clientWidth,
height: 400,
layout:{
background:{color:"#ffffff"},
textColor:"#000000"
},
grid:{
vertLines:{color:"#eeeeee"},
horzLines:{color:"#eeeeee"}
}
}
);


const candleSeries = chart.addCandlestickSeries();


let data = [
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
];


console.log(data);
candleSeries.setData(data);
chart.timeScale().fitContent();


window.addEventListener("resize",()=>{
chart.applyOptions({
width:chartElement.clientWidth
});
});


}
