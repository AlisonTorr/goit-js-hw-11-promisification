const delay = (ms) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms}ms`);
    }, ms);
  });

  return promise;
};

const logger = (result) => console.log(`${result}`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
