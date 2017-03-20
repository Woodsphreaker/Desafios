const splitNumber = (number) => {
    const numbers = [];
    while (number > 0) {
        numbers[numbers.length] = (number % 10);
        number = parseInt(number / 10);
    }
    return numbers;
};
const toNumber = (arr) => parseInt(arr.join(''));
const reducer  = (arr) => arr.reduce((_a,_b) => _a + _b);
const operators = {
    sum: (number, prop) => number.map((_a) => (_a + prop)),
    sub: (number,prop) => number.map((_a) => (_a - prop)),
    div: (number,prop) => number.map((_a) => (_a / prop)),
    mul: (number,prop) => number.map((_a) => (_a * prop))
};
const solve = (number) => {
    const algarism_1 = reducer(splitNumber(number))
    const sub = operators['sub']([number], algarism_1);
    const algarism_2 = reducer(splitNumber(sub));
    const sum = operators['sum']([algarism_2], 4);
    const mult = operators['mul'](sum, toNumber(splitNumber(sum)));
    const final = operators['mul'](mult, 3)
    return toNumber(final);
};

console.log(solve(39))