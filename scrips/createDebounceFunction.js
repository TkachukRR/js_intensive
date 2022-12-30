export function createDebounceFunction(func, delay) {
  let timeout;
  let fistTimePoint = Date.now();
  console.log(fistTimePoint);

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      let secondTimePoint = Date.now();
      console.log(secondTimePoint);
      console.log("delta: ", secondTimePoint - fistTimePoint);

      func.apply();
    }, delay);
  };
}
