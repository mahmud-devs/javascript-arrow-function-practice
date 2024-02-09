/*

================= arrow function ============

*/



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
