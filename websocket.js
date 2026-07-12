const ws = new WebSocket(CONFIG.websocket);

ws.onopen = () => {
    console.log("Connected");

    ws.send(JSON.stringify({
        op: "subscribe",
        args: [
            `tickers.${CONFIG.symbol}`
        ]
    }));
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
};

ws.onclose = () => {
    console.log("Disconnected");
};
