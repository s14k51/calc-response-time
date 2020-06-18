# calc-response-time

Calculates roundtrip time of a service call. Returns response time in seconds or milliseconds.

# Usage

```js
const { initTimer, getResponseTime } = require("calc-response-time");

const start = initTimer();

// do something

const t = getResponseTime(start, { units: "s" }); // default is `ms`

// Examples
// 1.054; // for `s`
// 1054; // for `ms`
```
