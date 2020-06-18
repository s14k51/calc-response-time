const NS_IN_MS = 10 ** 6;
const MS_IN_S = 10 ** 3;
const precision = 3;

function fixPrecision(num) {
  return parseFloat(num.toFixed(precision));
}

function toMS(ns) {
  if (ns < NS_IN_MS) {
    return 0;
  }

  if (ns > NS_IN_MS) {
    return Math.round(ns / NS_IN_MS);
  }

  if (ns === NS_IN_MS) {
    return 1;
  }
}

function toS(ms) {
  if (ms === 0) {
    return 0;
  }

  if (ms === MS_IN_S) {
    return 1;
  }

  return fixPrecision(ms / MS_IN_S);
}

function getResponseTime(start, options = {}) {
  const diff = process.hrtime(start);
  const [seconds, ns] = diff;
  const { units = "ms" } = options;
  const ms = toMS(ns);

  if (units === "s") {
    return fixPrecision(seconds + toS(ms));
  }

  const s_in_ms = seconds * MS_IN_S;

  return parseInt(s_in_ms + ms);
}

function initTimer() {
  return process.hrtime();
}

module.exports = {
  initTimer,
  getResponseTime,
};
