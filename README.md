# calc-response-time

Calculates roundtrip time of a service call. Returns response time in seconds or milliseconds.

# Usage

```js
const { initTimer, getResponseTime } = require("calc-response-time");

const start = initTimer();

// do something

const t = getResponseTime(start);

// Examples
// 1.3 sec
// 452 ms
```
