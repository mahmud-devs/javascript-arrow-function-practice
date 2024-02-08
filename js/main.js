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
const division = (num1, num2) => {
    return num1 / num2;
};
const modulas = (num1, num2) => {
    return num1 % num2;
};
const exponential = (num1, num2) => {
    return num1 ** num2;
};

// =================== variables , array , loop==================

let allFunction = [sum, subtract, multiply, division, modulas, exponential];

let num1 = 40;
let num2 = 13;

for (i = 0; i < allFunction.length; i++) {
    let allResult = allFunction[i](num1, num2);
    console.log(allResult);
}
