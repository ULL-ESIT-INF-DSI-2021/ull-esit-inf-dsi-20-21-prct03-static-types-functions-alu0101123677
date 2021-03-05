function isLeapYear(year: number): boolean {
  var resto:number; 

  resto = year % 4
  if (resto == 0 ) {
    resto = year % 100;
    if (resto == 0) {
      resto = year % 400;
      if (resto == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  else {
    return false;
  } 
}

if (isLeapYear(400)) {
  console.log('El año es bisiesto');
}
else {
  console.log('El año no es bisiesto');
}

