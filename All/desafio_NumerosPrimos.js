"use strict";

const divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const max = Math.max.apply(null, divisors);
const base = (num) => num > max ? [].concat(divisors, num) : divisors;
const numbers = (num) => [...Array(num).keys()];
const numberTest = (num) => base(num).map((_a) => num % _a === 0).filter(_a => _a === true);
const prime = (num) => numbers(num).filter(_a => numberTest(_a).length === 2);

console.log(prime(100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]