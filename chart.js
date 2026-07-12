const data = [
{
time: "2026-07-12",
open: 4100,
high: 4110,
low: 4090,
close: 4105
},
{
time: "2026-07-13",
open: 4105,
high: 4120,
low: 4095,
close: 4110
},
{
time: "2026-07-14",
open: 4110,
high: 4125,
low: 4100,
close: 4105
}
];

candleSeries.setData(data);
chart.timeScale().fitContent();
