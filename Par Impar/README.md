
# Show Me the Evens - Show me the Odds 
Diana is learning to count and she just learned the difference between odds and even numbers. 
She wants to have some fun, so she picks a random number. 
If that number is even, she decides to count all the even numbers up to it starting from 0 up to (but not including) the input. 
If not, she decides to count all the odd numbers up to that number starting from 1 (but not including) the input. 


```
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

```
