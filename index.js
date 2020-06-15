const NS_IN_MS = 10 ** 6;
const MS_IN_S = 10 ** 3;
const defaultPrecision = 2;

function fixPrecision(num, precision) {
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

function toS(ms, precision) {
  if (ms === 0) {
    return 0;
  }

  if (ms === MS_IN_S) {
    return 1;
  }

  return fixPrecision(ms / MS_IN_S, precision);
}

function getResponseTime(start, precision = defaultPrecision) {
  const diff = process.hrtime(start);
  const [seconds, ns] = diff;
  const ms = toMS(ns);

  if (seconds === 0) {
    return ms === MS_IN_S ? "1 sec" : `${ms} ms`;
  }

  const sec = fixPrecision(seconds + toS(ms, precision), precision);
  return `${sec} sec`;
}

function initTimer() {
  return process.hrtime();
}

module.exports = {
  initTimer,
  getResponseTime,
};
