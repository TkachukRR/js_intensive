import { inputValTest } from "./testInputVal.js";
import { changeNotation } from "./notation.js";

let userFirstVal = prompt("Введите число:", "");
let userSecondVal = prompt("Введите число:", "");

let testedFisrtVal = inputValTest(userFirstVal);
let testedSecondVal = inputValTest(userSecondVal);

changeNotation(userFirstVal, userSecondVal);
