function isValid(cadena: string): boolean {
  if (cadena == '') {
    return true;
  }
  else {
    var str:string = '0123456789';
    var valor:string = '';
    var subcadena:string = '';
    var verificar:boolean;
    var subcadenaValor:number;
    var valor2:number;
    var flujo:boolean;
    

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


if (isValid('')) {
  console.log('Mensaje válido');
}
else {
  console.log('Mensaje no válido');
}


