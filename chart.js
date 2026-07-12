const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
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


const ws = new WebSocket(
const ws = new WebSocket(
"wss://fstream.binance.com/ws/paxgusdt@kline_1m"
);


ws.onopen = ()=>{
console.log("Candle connected");
};


ws.onmessage=(event)=>{

const data = JSON.parse(event.data);

const k = data.k;


candleSeries.update({

time:k.t / 1000,

open:parseFloat(k.o),

high:parseFloat(k.h),

low:parseFloat(k.l),

close:parseFloat(k.c)

});

};
