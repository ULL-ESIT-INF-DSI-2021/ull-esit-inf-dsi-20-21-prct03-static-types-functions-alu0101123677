function isValidUsername(cadena) {
    if (cadena.length < 4 || cadena.length > 30)
        return false;
    if (cadena.charAt(0) == '_' || cadena.charAt(cadena.length - 1) == '_')
        return false;
    let str1 = 'abcdefghijklmnñopqrstuvwxyz';
    let str2 = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let str3 = '%&-_.*?!';
    let str4 = '123456789';
    let case1 = false;
    let case2 = false;
    let case3 = false;
    for (let char of cadena) {
        if (str1.search(char) != -1)
            case1 = true;
        if (str2.search(char) != -1)
            case2 = true;
        if (str3.search(char) != -1)
            case3 = true;
    }
    if (case1 == false || case2 == false || case3 == false)
        return false;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let valid = false;
    for (let char of cadena) {
        if (str1.search(char) != -1) {
            count1++;
            count2 = 0;
            count3 = 0;
        }
        if (str2.search(char) != -1) {
            count1++;
            count2 = 0;
            count3 = 0;
        }
        if (str3.search(char) != -1) {
            count1 = 0;
            count2++;
            count3 = 0;
        }
        if (str4.search(char) != -1) {
            count1 = 0;
            count2 = 0;
            count3++;
        }
        if (count1 >= 3 || count2 >= 3 || count3 >= 3)
            valid = true;
    }
    if (valid)
        return false;
    return true;
}
if (isValidUsername('he%122D'))
    console.log('Usuario válido');
else
    console.log('Usuario no válido');
