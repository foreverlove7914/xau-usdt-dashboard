const priceBox = document.getElementById("livePrice");
const status = document.getElementById("status");
const trend = document.getElementById("trend");
const signal = document.getElementById("signal");


let oldPrice = 0;


const ws = new WebSocket(
"wss://stream.bybit.com/v5/public/linear"
);


ws.onopen = () => {

status.innerHTML="Connected";

ws.send(JSON.stringify({

op:"subscribe",

args:["publicTrade.XAUUSDT"]

}));

};



ws.onmessage=(e)=>{


let data=JSON.parse(e.data);


if(data.data){


let price=Number(data.data[0].p);



priceBox.innerHTML="$"+price.toFixed(2);



if(oldPrice){


if(price>oldPrice){

priceBox.style.color="#00ff88";

status.innerHTML="📈 NAIK";

trend.innerHTML="Trend: BULLISH";

signal.innerHTML="BUY 🟢";

}



else if(price<oldPrice){


priceBox.style.color="#ff4444";

status.innerHTML="📉 TURUN";

trend.innerHTML="Trend: BEARISH";

signal.innerHTML="SELL 🔴";


}


}


oldPrice=price;


}


};
