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