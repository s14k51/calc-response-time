const { initTimer, getResponseTime } = require(".");

it("Test call", async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1054);
  });
  const start = initTimer();
  await promise;
  const t = getResponseTime(start);

  console.log(t); // 1.05 sec or 1.06 sec - depends on the execution
});
