const chart = LightweightCharts.createChart(
document.getElementById('chart'),
{
width: document.getElementById('chart').clientWidth,
height: 360,
layout:{
background:{color:'#ffffff'},
textColor:'#000000'
},
grid:{
vertLines:{color:'#eee'},
horzLines:{color:'#eee'}
}
});

const lineSeries = chart.addLineSeries();

let data = [];
let price = 4105;

setInterval(()=>{
    price += (Math.random()-0.5)*5;

    data.push({
        time: Math.floor(Date.now()/1000),
        value: price
    });

    lineSeries.setData(data);
},2000);
