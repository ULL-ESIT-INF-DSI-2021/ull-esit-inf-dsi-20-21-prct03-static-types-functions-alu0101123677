function factorial(valor: number): number {
  if (valor == 0) {
    return valor = 1;    
  }
  return valor * factorial(valor - 1);
}

function decimalToFactorial(valor: number): string {
  let str: string = '';
  let result: string = '';
  let i: number = 1;

  while (valor != 0) {
    str = String(valor % i);
    result = result + str;
    valor = Math.floor(valor / i);
    i++;
  }

  let factorial = result.split('');
  factorial = factorial.reverse();
  result = factorial.join('');

  return result;
}

function factorialToDecimal(cadena: string): number {
  let result: number = 0;
  let total: number = 0;
  let valor: number = 0;
  let aux:  number = cadena.length - 1;

  for(let char of cadena){
    valor = +char;
    result = valor * factorial(aux);
    total = total + result;
    aux--;
  }

  return total;
}

console.log(decimalToFactorial(463))
console.log(factorialToDecimal('341010'))