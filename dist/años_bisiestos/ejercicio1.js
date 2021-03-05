function isLeapYear(year) {
    var resto;
    resto = year % 4;
    if (resto == 0) {
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
function main() {
    if (isLeapYear(400)) {
        console.log('El año es bisiesto');
    }
    else {
        console.log('El año no es bisiesto');
    }
}
main();
