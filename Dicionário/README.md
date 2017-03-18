//dado o array de dictionary abaixo some o total dos valores
let dictionary = [{ '5': 50, '6': 60 }, { 'A': 10 }, { 'YEEZY': 30 }]


<pre>
const obj =  [{ '5': 50, '6': 60 }, { 'A': 10 }, { 'YEEZY': 30 }];
const arrNumbers = () => obj.map(_a => Object.values(_a));
const onlyNumbers = () => [].concat(...arrNumbers());
const result = () => onlyNumbers().reduce((_a, _b) => _a + _b, 0);

console.log(result()); // 150
</pre>