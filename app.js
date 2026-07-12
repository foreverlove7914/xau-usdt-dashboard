const livePrice = document.getElementById("livePrice");
const status = document.getElementById("status");

let oldPrice = 0;

const ws = new WebSocket(
"wss://fstream.binance.com/ws/xauusdt@trade"
);

ws.onopen = () => {
 status.innerHTML = "Connected";
};


ws.onmessage = (event) => {

 const data = JSON.parse(event.data);

 const price = parseFloat(data.p);

 livePrice.innerHTML = "$" + price.toFixed(2);


 if(oldPrice > 0){

   if(price > oldPrice){
      livePrice.style.color = "#00ff88";
      status.innerHTML = "📈 PRICE NAIK";
   }

   else if(price < oldPrice){
      livePrice.style.color = "#ff4444";
      status.innerHTML = "📉 PRICE TURUN";
   }

 }

 oldPrice = price;

};


ws.onclose = () => {
 status.innerHTML="Disconnected";
};
