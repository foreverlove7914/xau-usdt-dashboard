// multiTimeframe.js

const timeframes = [
    "M1",
    "M5",
    "M15",
    "M30",
    "H1",
    "H4",
    "D1",
    "W1"
];

function updateTimeframes(signal) {

    document.getElementById("m1").innerHTML = signal;
    document.getElementById("m5").innerHTML = signal;
    document.getElementById("m15").innerHTML = signal;
    document.getElementById("h1").innerHTML = signal;
    document.getElementById("h4").innerHTML = signal;
    document.getElementById("d1").innerHTML = signal;
    document.getElementById("w1").innerHTML = signal;

}
