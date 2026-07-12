const price = document.getElementById("livePrice");
const status = document.getElementById("status");

const ws = new WebSocket(
"wss://fstream.binance.com/ws/xauusdt@trade"
);

ws.onopen = () => {
status.innerHTML="Connected";
};

ws.onmessage = (event)=>{

let data = JSON.parse(event.data);

price.innerHTML =
"$ " + Number(data.p).toFixed(2);

};

ws.onerror = ()=>{
status.innerHTML="Error";
};

ws.onclose = ()=>{
status.innerHTML="Disconnected";
};
