export function inputValTest(val) {
  let trimedVal;
  if (val == null || val == "") {
    console.error("Некорректный ввод!");
    return;
  }

  trimedVal = val.trim();

  if (trimedVal != +trimedVal || val.includes(" ")) {
    console.error("Некорректный ввод!");
    return;
  }
}
