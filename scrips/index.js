import { inputValTest } from "./testInputVal.js";

let userFirstVal = prompt("Введите число:", "");
let userSecondVal = prompt("Введите число:", "");

let testedFisrtVal = inputValTest(userFirstVal);
let testedSecondVal = inputValTest(userSecondVal);
