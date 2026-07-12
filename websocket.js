const ws = new WebSocket("wss://fstream.binance.com/ws/xauusdt@trade");

ws.onopen = () => {
    console.log("Connected");
    document.getElementById("status").innerHTML = "Connected";
};

ws.onmessage = (event) => {

    const data = JSON.parse(event.data);

    const price = parseFloat(data.p).toFixed(2);

    document.getElementById("livePrice").innerHTML = price;

};

ws.onclose = () => {

    document.getElementById("status").innerHTML = "Disconnected";

};
