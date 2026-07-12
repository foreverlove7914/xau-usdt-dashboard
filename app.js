const livePrice = document.getElementById("livePrice");
const status = document.getElementById("status");

status.innerHTML = "Connecting...";

const ws = new WebSocket("wss://fstream.binance.com/ws/xauusdt@trade");

ws.onopen = () => {
    status.innerHTML = "Connected";
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    livePrice.innerHTML = Number(data.p).toFixed(2);
};

ws.onerror = () => {
    status.innerHTML = "Error";
};

ws.onclose = () => {
    status.innerHTML = "Disconnected";
};
