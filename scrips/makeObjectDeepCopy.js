export function makeObjectDeepCopy(originalObject) {
  if (typeof originalObject !== "object" || !originalObject) {
    console.error("убедитесь в корректности вводных данных. ожидается объект.");
    return;
  }

  if (Array.isArray(originalObject)) {
    console.error("убедитесь в корректности вводных данных. ожидается объект.");
    return;
  }

  let objKeysArr = Object.keys(originalObject);

  let copiedObj = Object.assign({}, originalObject);

  objKeysArr.map((key) => {
    if (typeof originalObject[key] === "object") {
      if (originalObject[key] === null) {
        copiedObj[key] = null;
        return;
      }

      if (Array.isArray(originalObject[key])) {
        copiedObj[key] = originalObject[key].slice();
        return;
      }

      if (originalObject[key] instanceof Date) {
        new Date(originalObject[key]);
        return;
      }

      copiedObj[key] = makeObjectDeepCopy(originalObject[key]);
      return;
    }
    copiedObj[key] = originalObject[key];
  });
  return copiedObj;
}

//сложность фунции O(2^n)
