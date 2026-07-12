const chart = LightweightCharts.createChart(
    document.getElementById("chart"),
    {
        width: window.innerWidth,
        height: 500,
        layout:{
            background:{
                color:"#111827"
            },
            textColor:"#ffffff"
        },
        grid:{
            vertLines:{
                color:"#1f2937"
            },
            horzLines:{
                color:"#1f2937"
            }
        }
    }
);

const candleSeries = chart.addCandlestickSeries({
    upColor:"#00ff88",
    downColor:"#ff4444",
    borderVisible:false,
    wickUpColor:"#00ff88",
    wickDownColor:"#ff4444"
});
