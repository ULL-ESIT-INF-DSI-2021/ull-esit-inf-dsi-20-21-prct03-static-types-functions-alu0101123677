function isValid(cadena) {
    if (cadena == ' ') {
        return true;
    }
    else {
        var str = '0123456789';
        var valor = '';
        var subcadena = '';
        var verificar;
        var subcadenaValor;
        var valor2;
        var flujo;
        for (var char of cadena) {
            if (str.search(char) != -1) {
                subcadena = '';
                valor = valor + char;
                flujo = true;
                verificar = false;
            }
            else {
                if (flujo == true) {
                    valor2 = +valor;
                    valor = "";
                    flujo = false;
                }
                subcadena = subcadena + char;
                subcadenaValor = subcadena.length;
                if (valor2 == subcadenaValor) {
                    verificar = true;
                }
                else {
                    verificar = false;
                }
            }
        }
        return verificar;
    }
}
if (isValid('5hello10hkgkguhkuhkhkh')) {
    console.log('Mensaje válido');
}
else {
    console.log('Mensaje no válido');
}
