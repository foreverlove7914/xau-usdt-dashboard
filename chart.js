const chart = LightweightCharts.createChart(
document.getElementById("chart"),
{
    width: window.innerWidth,
    height: 500,
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


const ws = new WebSocket(
"wss://fstream.binance.com/ws/btcusdt@kline_1m"
);


ws.onmessage = (event)=>{

    const data = JSON.parse(event.data);
    const k = data.k;

    candleSeries.update({
        time:k.t / 1000,
        open:Number(k.o),
        high:Number(k.h),
        low:Number(k.l),
        close:Number(k.c)
    });

};
