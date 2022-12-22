export function calculate(num1, num2) {
  let a = Number(num1);
  let b = Number(num2);
  console.log(typeof a);
  console.log(`сумма двух чисел ${a}+${b}=${a + b}`);
  return a + b;
}
