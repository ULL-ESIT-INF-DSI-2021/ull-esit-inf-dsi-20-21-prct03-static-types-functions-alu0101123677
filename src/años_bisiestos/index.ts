function isLeapYear(year: number) {
  var cuatro:number = 4;
  var cien:number = 100;
  var cuatrocientos:number = 400;
  var resto:number; 

  resto = year % 4
  if (resto == 0 ) {
    console.log('El año es bisiesto');
  }
  else {
    console.log('El año no es bisiesto');
  }
  
    /*if (year === 4) {
    if (year === 100) {
      if (year === 400) {
        console.log('El año es bisiesto');  
      }
      else {
        console.log('el año no es bisiesto'); 
      }
    }
    else {
      console.log('el año es bisiesto');
    }
  }
  else {
    console.log('el año no es bisiesto');
  }*/  
}

isLeapYear(1999);