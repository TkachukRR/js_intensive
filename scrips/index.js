import { inputValTest } from "./testInputVal.js";
import { addArrayPrototypeProperty } from "./myFilter.js";
import { myFilter } from "./myFilter.js";
// let userFirstVal = prompt("Введите число:", "");
// let userSecondVal = prompt("Введите число:", "");

// let testedFisrtVal = inputValTest(userFirstVal);
// let testedSecondVal = inputValTest(userSecondVal);
addArrayPrototypeProperty(myFilter);

// console.log(
//   [
//     5,
//     2,
//     10,
//     "asd",
//     null,
//     undefined,
//     NaN,
//     "",
//     ["a", "b"],
//     { a: "sss" },
//   ].myFilter((item) => item > this.a),
//   { a: 3 }
// );

const ar = [
  5,
  2,
  10,
  "asd",
  null,
  undefined,
  NaN,
  "",
  ["a", "b"],
  { a: "sss" },
];
const range = { a: 3 };

function isRange(item) {
  if (item > this.min && item < this.max) return item;
}

console.log(ar.filter(isRange, { min: 3, max: 8 }));
console.log(ar.myFilter(isRange, { min: 3, max: 8 }));
