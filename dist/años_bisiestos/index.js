function isLeapYear(year) {
    var cuatro = 4;
    var cien = 100;
    var cuatrocientos = 400;
    var resto;
    resto = year % 4;
    if (resto == 0) {
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
