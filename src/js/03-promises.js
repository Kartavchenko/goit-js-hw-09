import { Notify } from 'notiflix/build/notiflix-notify-aio';

  const firstDelay = document.querySelector('[name="delay"]');
  const step = document.querySelector('[name="step"]');
  const amount = document.querySelector('[name="amount"]');
  const button = document.querySelector('.form');

button.addEventListener("submit", trueSubmit);
  
function trueSubmit(e) {
    
  e.preventDefault();
  
  let valueFirsDelay = Number(firstDelay.value);
  const valueStep = Number(step.value);
  const valueAmount = Number(amount.value);
  
  for (let i = 1; i <= valueAmount; i += 1) {
      createPromise(i, valueFirsDelay)
        .then(makeSuccsePromise)
        .catch(makeErrorPromises);  
        valueFirsDelay += valueStep;
      };
};

function makeSuccsePromise(resolve) {
  Notify.success(resolve, {useIcon: false});
};

function makeErrorPromises(reject) {
  Notify.failure(reject, {useIcon: false});
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      };
    }, delay);
  });
};

// function onePromise() {
//       Promise.race({position, delay})
//       .then(value => console.log(value))
//       .catch(error => console.log(error));
// };