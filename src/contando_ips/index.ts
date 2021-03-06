function ipsInRange(cadena: string, cadena2: string): number {
  let ip1 = cadena.split('.');
  let ip2 = cadena.split('.');
  let valor: number = 0;
  
  let array: object = [,,,];


  for (let i = 3; i >= 0; i--) {
    let potencia = 1;
    ip1[i] = ip1[i] + 256 ** potencia;
    ip2[i] = ip2[i] + 256 ** potencia;
    potencia = potencia + 1;
  }
  


  return valor;

}

console.log(ipsInRange('10.0.0.0', '10.0.0.50'));
console.log(ipsInRange('10.0.1.0', '10.0.1.0'));
console.log(ipsInRange('20.0.0.10', '20.0.1.0'));
