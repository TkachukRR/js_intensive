export function myFilter(cb, thisArr) {
  let thisArr = this;
  const filteredArr = [];
  for (let i = 0; i < thisArr.length - 1; i++) {
    if (cb.call(thisArr, thisArr[i], i)) {
      filteredArr.push(thisArr[i]);
    }
  }
  return filteredArr;
}
