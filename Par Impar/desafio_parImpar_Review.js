const numbersGenerator = (numbers) => [].concat(...Array(numbers).keys());
const props = [
    (num) => num % 2 === 0,
    (num) => !props[0](num)
]
const result = (range, type) => numbersGenerator(range).filter(_a => props[type](_a))
console.log(result(20,0)); 
console.log(result(20,1)); 

// caso de uso
// result(20,0) => Gera um array com 20 posições e retorna todos os números pares (opção 0)
// result(20,1) => Gera um array com 20 posições e retorna todos os números ímpares (opção 1)