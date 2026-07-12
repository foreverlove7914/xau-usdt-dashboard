const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
height:500,
layout:{
background:{color:"#101827"},
textColor:"#fff"
}
});

const candleSeries = chart.addCandlestickSeries();


fetch("https://api.binance.com/api/v3/klines?symbol=PAXGUSDT&interval=1m&limit=100")
.then(res=>res.json())
.then(data=>{

let candles=data.map(x=>({
time:x[0]/1000,
open:Number(x[1]),
high:Number(x[2]),
low:Number(x[3]),
close:Number(x[4])
}));

candleSeries.setData(candles);

chart.timeScale().fitContent();

});
