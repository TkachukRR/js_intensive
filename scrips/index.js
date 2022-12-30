import { inputValTest } from "./testInputVal.js";
import { Calculator } from "./Calculator.js";

// let userFirstVal = prompt("Введите число:", "");
// let userSecondVal = prompt("Введите число:", "");

// let testedFisrtVal = inputValTest(userFirstVal);
// let testedSecondVal = inputValTest(userSecondVal);

const myCalc = new Calculator(
  1.111111222222222222222222223333333333333333333333333,
  233333333333333333333333333333333333333333
);
myCalc.getX();
myCalc.getY();

// myCalc.setX(1);
// myCalc.setY(2);

myCalc.getX();
myCalc.getY();

myCalc.logSum();
myCalc.logMul();
myCalc.logSub();
myCalc.logDiv();
