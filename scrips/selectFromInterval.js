export function selectFromInterval(
  innerArray,
  firstIntervalVal,
  secondIntervalVal
) {
  if (!Array.isArray(innerArray)) {
    throw new Error("первый аргумент фунции - массив чисел");
  }

  if (innerArray.some((element) => typeof element !== "number")) {
    throw new Error("масив должен состоять из чисел");
  }

  if (
    typeof firstIntervalVal !== "number" ||
    typeof secondIntervalVal !== "number"
  ) {
    throw new Error("значения интервала - числа");
  }

  return innerArray.filter(
    (element) =>
      (element >= firstIntervalVal && element <= secondIntervalVal) ||
      (element <= firstIntervalVal && element >= secondIntervalVal)
  );
}

// сложность фунции O(n)
