"use strict";

const digits = num => num.toString().split("").map(Number);
const invertNumber = number => digits(number).reverse();
const toNumber = list => Number(list.join(""));
const invertDigit = number => toNumber(invertNumber(number));
const sumList = list => list.reduce((pre, curr) => pre + curr);
const sumDigits = number => sumList(digits(number));


const solve = number => {
    const subNumber = number - sumDigits(number);
    const sumNumberPlusFour = sumDigits(subNumber) + 4;
    const multNumberWhitReverse = sumNumberPlusFour * (invertDigit(sumNumberPlusFour));
    const multNumberForThree = multNumberWhitReverse * 3;
    const result = multNumberForThree;

    return result;

};

console.log(solve(90));