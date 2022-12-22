import { inputValTest } from "./testInputVal.js";
import { calculate } from "./calculation.js";

let userFirstVal = prompt("Введите число:", "");
let userSecondVal = prompt("Введите число:", "");

let testedFisrtVal = inputValTest(userFirstVal);
let testedSecondVal = inputValTest(userSecondVal);

calculate(testedFisrtVal, testedSecondVal);
