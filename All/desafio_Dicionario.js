const dictionary = [{ '5': 50, '6': 60 }, { 'A': 10 }, { 'YEEZY': 30 }],
      sum = (valores) => valores.reduce((a, b) => a + b),
      valores = dictionary.map(valor => sum(Object.values(valor))).reduce((a,b) => a + b)


console.log(valores);