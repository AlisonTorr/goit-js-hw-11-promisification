const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  const promise = new Promise((resolve, reject) => {
    const canProcess = Math.random() > 0.3;
    setTimeout(() => {
      if (canProcess) {
        resolve(`Transaction ${transaction.id} processed in ${delay}ms`);
      } else {
        reject(
          `Error processing transaction ${transaction.id}. Please try again later.`
        );
      }
    }, delay);
  });

  return promise;
};

const logSuccess = (result) => {
  console.log(result);
};

const logError = (error) => {
  console.warn(error);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
