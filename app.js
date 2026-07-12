const livePrice = document.getElementById("livePrice");
const status = document.getElementById("status");
const trend = document.getElementById("trend");
const signal = document.getElementById("signal");

let prices = [];

const ws = new WebSocket(
"wss://fstream.binance.com/ws/xauusdt@trade"
);

ws.onopen = () => {
    status.innerHTML = "Connected";
};


ws.onmessage = (event) => {

    const data = JSON.parse(event.data);

    const price = parseFloat(data.p);

    if(!price) return;


    livePrice.innerHTML = "$" + price.toFixed(2);


    prices.push(price);

    if(prices.length > 20){
        prices.shift();
    }


    let first = prices[0];
    let last = prices[prices.length - 1];


    if(last > first){

        livePrice.style.color="#00ff88";

        trend.innerHTML="📈 TREND NAIK";

        signal.innerHTML="🟢 BUY";

    }

    else if(last < first){

        livePrice.style.color="#ff4444";

        trend.innerHTML="📉 TREND TURUN";

        signal.innerHTML="🔴 SELL";

    }

    else{

        trend.innerHTML="➡️ SIDEWAY";

        signal.innerHTML="WAIT";

    }

};


ws.onerror = () => {

    status.innerHTML="Connection Error";

};


ws.onclose = () => {

    status.innerHTML="Disconnected";

};
