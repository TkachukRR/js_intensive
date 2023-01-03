export function createDebounceFunction(func, delay) {
  let timeout;

  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func();
    }, delay);
  };
}
