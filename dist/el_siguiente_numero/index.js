function nextNumber(valor) {
    let str = String(valor);
    let str2 = '';
    let length = str.length;
    let valor2 = str.split('');
    for (var i = length - 1; i > 0; i--) {
        if (+valor2[i] > +valor2[i - 1]) {
            break;
        }
    }
    if (i == 0) {
        console.log('No es posible reordenarlos');
        return -1;
    }
    let x = +valor2[i - 1];
    let smallest = i;
    console.log(valor2[i - 1]);
    console.log(valor2[smallest]);
    for (let j = i + 1; j < length; j++) {
        if (+valor2[j] > x && +valor2[j] < +valor2[smallest]) {
            smallest = j;
        }
    }
    let y = valor2[smallest];
    valor2[smallest] = valor2[i - 1];
    valor2[i - 1] = y;
    str = '';
    for (let z = 0; z < i; z++) {
        str = str + valor2[z];
    }
    for (let z = i; z < length; z++) {
        str2 = str2 + valor2[z];
    }
    let length2 = str2.length;
    let sort = str2.split('');
    sort.sort();
    str2 = '';
    for (let z = 0; z < length2; z++) {
        str2 = str2 + sort[z];
    }
    str = str + str2;
    return +str;
}
console.log('El siguiente numero reordenando las cifras de 9 es: ' + nextNumber(534976));
