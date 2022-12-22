export function changeNotation(num, toNotation) {
  if (toNotation > 36 || toNotation < 2) {
    console.error("Некорректный ввод! Система исчисления в диапазоне 2-36");
    return;
  }
  num = +num;
  console.log(num.toString(toNotation));
  return num.toString(toNotation);
}
