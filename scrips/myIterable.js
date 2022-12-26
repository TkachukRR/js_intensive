Object.prototype[Symbol.iterator] = function () {
  if (!this.from || !this.to) {
    throw new Error("проверте наличие свойств from, to у объекта");
  }

  if (this.from > this.to) {
    throw new Error(
      "проверте правильность значений свойств from, to у объекта"
    );
  }

  const endIterationVal = this.to;
  let startIterationVal = this.from - 1;

  return {
    next() {
      if (startIterationVal < endIterationVal) {
        startIterationVal++;
        return { done: false, value: startIterationVal };
      } else {
        return { done: true };
      }
    },
  };
};

export const iterable = {};

//сложность фунции O(n)
