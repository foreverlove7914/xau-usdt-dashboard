const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
width: window.innerWidth,
height:500,

layout:{
background:{
color:"#101827"
},
textColor:"#ffffff"
},

grid:{
vertLines:{
color:"#202c3d"
},
horzLines:{
color:"#202c3d"
}
},

timeScale:{
timeVisible:true
}

});


const candleSeries = chart.addCandlestickSeries({

upColor:"#00ff88",
downColor:"#ff4444",
borderVisible:false,
wickUpColor:"#00ff88",
wickDownColor:"#ff4444"

});



let candles = {};

const ws = new WebSocket(
"wss://stream.bybit.com/v5/public/linear"
);



ws.onopen = ()=>{

document.getElementById("status").innerHTML="Connected";

ws.send(JSON.stringify({

op:"subscribe",

args:[
"kline.1.XAUTUSDT"
]

}));

};



ws.onmessage=(event)=>{


const data=JSON.parse(event.data);


if(!data.data) return;


let k=data.data[0];


let candle={

time:k.start/1000,

open:parseFloat(k.open),

high:parseFloat(k.high),

low:parseFloat(k.low),

close:parseFloat(k.close)

};



candleSeries.update(candle);


};
