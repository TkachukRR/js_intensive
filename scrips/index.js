import { inputValTest } from "./testInputVal.js";
import { myStack } from "./stack.js";

// let userFirstVal = prompt("Введите число:", "");
// let userSecondVal = prompt("Введите число:", "");

// let testedFisrtVal = inputValTest(userFirstVal);
// let testedSecondVal = inputValTest(userSecondVal);

const stackTasks = new myStack();
// const stackTasks = new Stack({ data: [] });

console.log(stackTasks.length());

stackTasks.push("task1");
console.log(stackTasks.data.toString());
console.log("peek:", stackTasks.peek());

stackTasks.push("task2");
console.log(stackTasks.data.toString());
console.log("peek:", stackTasks.peek());

stackTasks.push("task3");
console.log(stackTasks.data.toString());
console.log("peek:", stackTasks.peek());

console.log(stackTasks.length());
console.log(stackTasks.data);

stackTasks.pop();
stackTasks.pop();
stackTasks.pop();
stackTasks.pop();

console.log(stackTasks.data);

console.log(stackTasks.peek());
