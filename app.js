const livePrice = document.getElementById("livePrice");
const status = document.getElementById("status");

let lastPrice = 0;

const ws = new WebSocket(
"wss://stream.bybit.com/v5/public/linear"
);

ws.onopen = () => {

status.innerHTML = "Connected";

ws.send(JSON.stringify({
op:"subscribe",
args:["publicTrade.XAUUSDT"]
}));

};


ws.onmessage = (event)=>{

const msg = JSON.parse(event.data);


if(msg.data){

let price = Number(msg.data[0].p);


livePrice.innerHTML =
"$" + price.toFixed(2);



if(lastPrice > 0){

if(price > lastPrice){

status.innerHTML="📈 NAIK";
livePrice.style.color="#00ff88";

}


if(price < lastPrice){

status.innerHTML="📉 TURUN";
livePrice.style.color="#ff4444";

}

}


lastPrice = price;


}


};


ws.onclose = ()=>{

status.innerHTML="Disconnected";

};
