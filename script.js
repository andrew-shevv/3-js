// Task 1

function task1() {
    console.log("running task 1:");
    var num = parseInt(prompt("input number"), 10);
    console.log(`${num}^3 = ${numberCubedMath(num)}`);
    console.log("task 1 over.");
}

// Solution 1 (simple multiplication):

function numberCubedSimple(number) {
    return number * number * number;
}

// Solution 2 (using Math (used in the task)):

function numberCubedMath(number) {
    return Math.pow(number, 3);
}


// Task 2

function task2() {
    console.log("running task 2:");
    var num = parseInt(prompt("input number"), 10);
    if (num == NaN) console.log("this is not a number");
    else console.log(`salary adjusted for taxes = ${numberTaxed(num)}`);
    console.log("task 2 over.");
}

// Solution:

function numberTaxed(number) {
    return number - number * 0.13;
}


// Task 3

function task3() {
    console.log("running task 3:");
    var num1 = parseInt(prompt("input number 1"), 10);
    var num2 = parseInt(prompt("input number 2"), 10);
    var num3 = parseInt(prompt("input number 3"), 10);
    console.log(`the largest of the numbers ${num1}, ${num2}, ${num3} is ${findLargestNumber(num1, num2, num3)}`);
    console.log("task 3 over.");
}

// Solution:

function findLargestNumber(number1, number2, number3) {
    bigNum = number1;
    if (number2 > bigNum) bigNum = number2;
    if (number3 > bigNum) bigNum = number3;
    return bigNum;
}


// Task 4

function task4() {
    console.log("running task 4:");
    var num1 = parseInt(prompt("input number 1"), 10);
    var num2 = parseInt(prompt("input number 2"), 10);
    console.log(`addition of the numbers ${num1} and ${num2}: ${addition(num1, num2)}`);
    console.log(`subtraction of the numbers ${num1} and ${num2}: ${subtraction(num1, num2)}`);
    console.log(`multiplication of the numbers ${num1} and ${num2}: ${multiplication(num1, num2)}`);
    console.log(`division of the numbers ${num1} and ${num2}: ${division(num1, num2)}`);
    console.log("task 4 over.");
}

// Solution:

function addition(number1, number2) {
    return number1 + number2;
}

function subtraction(number1, number2) {
    if (number1 > number2) {
        return number1 - number2;
    }
    else return number2 - number1;
}

function multiplication(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    if (number1 > number2) {
        return number1 / number2;
    }
    else return number2 / number1;
}