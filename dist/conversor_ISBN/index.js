function isValidISBN(cadena) {
    var number = 0;
    var count = 10;
    var verificacion;
    cadena = cadena.replace(/-/g, '');
    for (var char of cadena) {
        if (char == 'x' || char == 'X') {
            char = '10';
            number = number + (+char * count);
            count = count - 1;
        }
        else {
            number = number + (+char * count);
            count = count - 1;
        }
    }
    if (number % 11 == 0) {
        return verificacion = true;
    }
    return verificacion = false;
}
if (isValidISBN('3-598-21508-8')) {
    console.log('ISBN válido');
}
else {
    console.log('ISBN no válido');
}
