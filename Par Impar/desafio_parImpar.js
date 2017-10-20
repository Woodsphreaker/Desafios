
/*
const numbersTest = (num, val) =>
    num % 2 === 0 && val % 2 === 0
        ? true
        : num % 2 !== 0 && val % 2 !== 0
            ? true
            : false;
*/

const numbersTest = (number) => number % 2 === 0 ? true : false;

const numbers = (number) =>
    Array.from({ length: number })
        .map((a, b) => b)
        .filter(a => numbersTest(number, a));


console.log(numbers(20));
<<<<<<< HEAD

=======
>>>>>>> 2855e3578bf26ef307177039b446e7a0f6e4d6f8
console.log(numbers(11));
