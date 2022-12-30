import { inputValTest } from "./testInputVal.js";
import { createDebounceFunction } from "./createDebounceFunction.js";

// let userFirstVal = prompt("Введите число:", "");
// let userSecondVal = prompt("Введите число:", "");

// let testedFisrtVal = inputValTest(userFirstVal);
// let testedSecondVal = inputValTest(userSecondVal);

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200); // так как задержка в 1000мс и новый вызов этой же функции происходит через 200 миллисекунд, то таймер запускается заново
setTimeout(debounceLog100, 400); // снова сбрасываем таймер ещё через 200 миллисекунд
