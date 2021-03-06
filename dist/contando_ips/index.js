function ipsInRange(cadena, cadena2) {
    let ip1 = cadena.split('.');
    let ip2 = cadena2.split('.');
    let ip1_number = 0;
    let ip2_number = 0;
    let total1 = 0;
    let total2 = 0;
    let resultado = 0;
    let potencia = 0;
    for (let i = 3; i >= 0; i--) {
        ip1_number = +ip1[i] * 256 ** potencia;
        ip2_number = +ip2[i] * 256 ** potencia;
        total1 = total1 + ip1_number;
        total2 = total2 + ip2_number;
        potencia = potencia + 1;
    }
    resultado = total2 - total1;
    resultado = Math.abs(resultado);
    return resultado;
}
console.log('El rango entre Ips es: ' + ipsInRange('10.0.0.0', '10.0.0.50'));
console.log('El rango entre Ips es: ' + ipsInRange('10.0.1.0', '10.0.1.0'));
console.log('El rango entre Ips es: ' + ipsInRange('20.0.0.10', '20.0.1.0'));
