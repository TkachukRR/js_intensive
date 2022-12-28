export function myFilter(cb, argObj) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(argObj, this[i], i)) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
}
