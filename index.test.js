const { initTimer, getResponseTime } = require(".");

it("Test call in ms", async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1054);
  });
  const start = initTimer();
  await promise;
  const t = getResponseTime(start);

  console.log(t); // ~1054
});

it("Test call in s", async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1054);
  });
  const start = initTimer();
  await promise;
  const t = getResponseTime(start, { units: "s" });

  console.log(t); // ~1.054
});
