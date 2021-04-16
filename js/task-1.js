const delay = (ms) => {
  const promise = new Promise((resolve) => {
    const logger = (time) => console.log(`Resolved after ${time} ms`);
    setTimeout(() => {
      resolve(logger(ms));
    }, ms);
  });

  return promise;
};

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
