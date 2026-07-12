const livePrice = document.getElementById("livePrice");
const status = document.getElementById("status");
const trend = document.getElementById("trend");
const signal = document.getElementById("signal");

let oldPrice = 0;

const ws = new WebSocket(
"wss://fstream.binance.com/ws/xauusdt@trade"
);

ws.onopen = () => {
status.innerHTML = "Connected";
};


ws.onmessage = (event)=>{

const data = JSON.parse(event.data);

const price = parseFloat(data.p);


livePrice.innerHTML = "$" + price.toFixed(2);


if(oldPrice > 0){

if(price > oldPrice){

trend.innerHTML="📈 NAIK";
signal.innerHTML="BUY";

}

else if(price < oldPrice){

trend.innerHTML="📉 TURUN";
signal.innerHTML="SELL";

}

}


oldPrice = price;

};


ws.onclose=()=>{

status.innerHTML="Disconnected";

};
