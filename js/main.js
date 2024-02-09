/*

================= arrow function ============

*/

const sum = (num1, num2) => {
    return "This is sum:", num1 + num2;
};
const subtract = (num1, num2) => {
    return num1 - num2;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
const divison = (num1, num2) => {
    return num1 / num2;
};
const modulas = (num1, num2) => {
    return num1 % num2;
};
const exponential = (num1, num2) => {
    return num1 ** num2;
};

// =================== variables , array , loop==================

let allFunction = [sum, subtract, multiply, divison, modulas, exponential];

let num1 = 40;
let num2 = 13;

for (i = 0; i < allFunction.length; i++) {
    let allResult = allFunction[i](num1, num2);
    if (allFunction[i] == allFunction[0]) {
        console.log("This is sum:", allResult);
    }
    if (allFunction[i] == allFunction[1]) {
        console.log("This is subtract:", allResult);
    }
    if (allFunction[i] == allFunction[2]) {
        console.log("This is multiply:", allResult);
    }
    if (allFunction[i] == allFunction[3]) {
        console.log("This is divison:", allResult);
    }
    if (allFunction[i] == allFunction[4]) {
        console.log("This is modulas:", allResult);
    }
    if (allFunction[i] == allFunction[5]) {
        console.log("This is exponential:", allResult);
    } else {
    }
}
