const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
width: window.innerWidth,
height:500,
layout:{
background:{color:"#101827"},
textColor:"#ffffff"
},
grid:{
vertLines:{color:"#202c3d"},
horzLines:{color:"#202c3d"}
}
});

const candleSeries = chart.addCandlestickSeries();

let price = 4100;

setInterval(()=>{

let open = price;
let close = open + (Math.random()-0.5)*10;
let high = Math.max(open,close)+5;
let low = Math.min(open,close)-5;

candleSeries.update({
time: Math.floor(Date.now()/1000),
open:open,
high:high,
low:low,
close:close
});

price = close;

},1000);
