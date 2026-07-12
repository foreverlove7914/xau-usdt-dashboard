// websocket.js

let socket = null;

function connectWebSocket() {
    const status = document.getElementById("status");

    status.innerHTML = "Connecting...";

    // URL ini akan diganti dengan penyedia data sebenar
    socket = new WebSocket("wss://example-data-provider");

    socket.onopen = () => {
        status.innerHTML = "🟢 LIVE";
        console.log("WebSocket Connected");
    };

    socket.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);

            // Contoh kemas kini harga
            if (data.price) {
                document.getElementById("livePrice").innerHTML =
                    Number(data.price).toFixed(2);
            }

        } catch (err) {
            console.log(err);
        }
    };

    socket.onclose = () => {
        status.innerHTML = "🔴 Reconnecting...";

        setTimeout(() => {
            connectWebSocket();
        }, 5000);
    };

    socket.onerror = (err) => {
        console.log(err);
    };
}

connectWebSocket();
