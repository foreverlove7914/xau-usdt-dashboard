const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
    width: window.innerWidth,
    height: 500,

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
    }
});


const candleSeries = chart.addCandlestickSeries();


const ws = new WebSocket(
"wss://fstream.binance.com/ws/xauusdt@kline_1m"
);


ws.onmessage = (event)=>{

const data = JSON.parse(event.data);

const candle = data.k;


candleSeries.update({

time: candle.t / 1000,

open: parseFloat(candle.o),

high: parseFloat(candle.h),

low: parseFloat(candle.l),

close: parseFloat(candle.c)

});

};
