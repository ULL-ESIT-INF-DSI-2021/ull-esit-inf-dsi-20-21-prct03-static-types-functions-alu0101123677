# Informe Práctica 3. Tipos de datos estáticos y funciones
## 1. Introducción

Informe de la tercera práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado 10 ejercicios diversos de typescript para realizar la introdución a los diversos tipos de datos **estáticos** y **funciones**, además de la utilización de **strings** y **expresiones regulares**.

## 2. Objetivos

El objetivo principal de la práctica es la realización de diversos ejercicios para aprender los fundamentos de Typescript y Javascript. Para conseguirlo se tienen los siguientes ejercicios:

* Ejercicio 1 Años bisiestos.
* Ejercicio 2 Notación decimal y factorial.
* Ejercicio 3 Validador de mensajes.
* Ejercicio 4 Conversor de estilos.
* Ejercicio 5 Un solo golpe.
* Ejercicio 6 Conversor ISBN.
* Ejercicio 7 El siguiente número.
* Ejercicio 8 Contando IPs.
* Ejercicio 9 Entrenador Pokemon.
* Ejercicio 10 Validador de nombre usuario.

## 3. Desarrollo

### 3.1 Tareas Previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 3 y preparar el entorno del proyecto la práctica 3, para esto es necesario crear y configurar los archivos *package.json* y *tsconfig.jon* así cómo crear la **estructura de directorios**. 

### Ejercicio 1 Años bisiestos.

En este ejercicio creamos la función isLeapYear en la cual recibe un valor númerico positivo, que inidica un año, y retorna un booleano. Para realizarlo hacemos una serie de if y else anidados con las condiciones puestas en el enunciado, que son:

* Cada año debe ser divisible por 4
* Si es divisible por 100 no es bisiesto
* Los años divisibles por 400 son bisiestos

```typescript
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
```

### Ejercicio 2 Notación decimal y factorial.

En este ejercicio creamos tres funciones:

La función factorial recibe un valor number y retorns un number. Se utiliza con la función factorialtoDecimal para conseguir de manera recursiva el factorial.

```typescript
function factorial(valor: number): number {
  if (valor == 0) {
    return valor = 1;    
  }
  return valor * factorial(valor - 1);
}
```

La función factorialToDecimal recibe un string y retorna un tipo number. Recorremos toda la cadena caracter a caracter, guardamos en una variable number el valor de la cadena en esa posición y lo multiplicamos con el factorial obtenido en la función factorial, este valor obtenido se va incrementando constantemente mientras dure el bucle para conseguir de esta manera el valor decimal.

```typescript
function factorialToDecimal(cadena: string): number {
  let result: number = 0;
  let total: number = 0;
  let valor: number = 0;
  let aux:  number = cadena.length - 1;

  for(let char of cadena){
    valor = +char;
    result = valor * factorial(aux);
    total = total + result;
    aux--;
  }

  return total;
}
```

La función decimalToFactorial recibe un number y retornamos un string. Realizamos un bucle while mientras que el valor de la variable valor sea distinto de 0, en el bucle guardamos en formato string el resultado de realiza el modulo de valor con la varaiable i, inicializa a 1 e incrementada en 1 con cada interación. este string obtenido se lo concatenaremos en otro string con cada iteración y modificaremos el valor de la variable valor y cuando salgamos del bucle tendremos un string con el factorial correspondiente pero de manera inversa.

Lo último que haremos será convertirlo en un array, ordenarlo de manera inversa y convertirlo de nuevo en un string para así retornarlo.

```typescript
function decimalToFactorial(valor: number): string {
  let str: string = '';
  let result: string = '';
  let i: number = 1;

  while (valor != 0) {
    str = String(valor % i);
    result = result + str;
    valor = Math.floor(valor / i);
    i++;
  }

  let factorial = result.split('');
  factorial = factorial.reverse();
  result = factorial.join('');

  return result;
}
```

### Ejercicio 3 Validador de mensajes.

En este ejercicio creamos la función isValid para validar mensajes si cumplen ciertas condiciones, a la función le pasamos un string y nos retorna un booleano. En la función creamos un string con los valores del 0 al 9 y diversos string vacios, así como de tipo number y booleanos. 

Recorremos todo el string pasado por parametro con un for y vamos comparando caracter a caracter si es un valos númerico o un carácter. Si es un número lo va guardando en un string vacio y si es un carácter en otro string vacio, una vez que tengamos los dos string procedemos a comparar si el valor del primer string transformado en un tipo de datos number es igual a la longitud del segundo string. Cuando son iguales pone la variable verificar a true y si no lo son lo ponen a false. Cuandos se halla recorrido todo el string pasado por parametro retornamos la variable verificar.

```typescript
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
```

### Ejercicio 4 Conversor de estilos.

En este ejercico creamos dos funciones:

la función fromSnakeToCamelCase nos permite pasar del formato snake al formato camel. Para esto recibe un string y retorna un string. Recorremos toda la cadena recibida y cuando encuentre un guión bajo ponemos la variable booleana a true. Para cuando encuentre un caracter del alfabeto este lo introducirá en una cadena que inicialmente se encuentre vacia, siempre que la variable booleana este a true guardará el caracter en mayusculas y pondrá la variable a false. Cuando halla recorrido toda la cadena dada retornará un string con la misma cadena pero en formato camel case.

```typescript
function fromSnakeToCamelCase(cadena: string): string {
  var result:string = '';
  var flujo:boolean;
  
  for (var char of cadena) {
    if (char == '_') {
      flujo = true;   
    }
    else {
      if (flujo) {
        result = result + char.toUpperCase();
        flujo = false;
      }
      else {
        result = result + char;    
      }    
    }   
  } 
  return result;
}
```

la función fromCameToSnakeCase nos permite pasar del formato camel al formato case. Para esto recibe un string y retorna un string. Recorremos toda la cadena recibida y la vamos comparando con un string que tiene el alfabeto en minusculas, en el momentos que la función search falle nos inidicará que en esa posición hay una mayuscula. Cuando no se encuentre una mayuscula introducirá el caracter en un string vacio y cuando si se encuentre una mayuscula introducira primero el caracter _ y luego el caracter correspondiente. Cuando terminemos de recorrer toda la cadena utilizamos la función toLowerCase en el string resultado y los retornamos.

```typescript
function fromCameToSnakeCase(cadena: string): string {
  var result:string = '';
  var str:string = 'abcdefghijklmnopqrstuvwxyz';
  for (var char of cadena) {
    if (str.search(char) != -1) {
      result = result + char;   
    }
    else {
      result = result + '_';
      result = result + char;    
    }   
  } 
  return result.toLowerCase();
}
```

### Ejercicio 5 Un solo golpe.

En este ejericio creamos la función onePunch la cual recibe un string y retorna una string. Para esta función retornamos directamente haciendo un operador ternario, si la cadena estuviera vacia devolvemos el string 'Broken!', si no lo está quitamos todas las 'e' y las 'a' con con un replace global, luego lo convertimos en un array con la función split, lo ordenamos con la función sort y lo volvemos a convertir en un string con la función join.

```typescript
function onePunch(cadena: string): string {
  return cadena == '' ? 'Broken!' :  cadena.replace(/[eaEA]/g, '').split(" ").sort().join(' '); 
}
```

### Ejercicio 6 Conversor ISBN.

En este ejericio creamos la función isValidPunch la cual recibe un string y retorna un booleano. Inicializamos dos variables tipo number, una a 0 y otra a 10. Continuamos quitando todos los guiones con la función replace y empezamos a recorrer todo el string. la intención es que en cada interación coga la variable a cero y se la sume al valor actual del caracter de la cadena multiplicada por la variable inicializa a 10, y luego reducir esta ultima variable en 1 y de esta manera conseguir el último valor antes de aplicarle el modulo con 11. También en los momentos en los que se encuentre un caracter x o X este lo convertira a 10. y una vez recorrida toda la cadena y con el valor de number le aplicamos el modulo de 11, si es igual a 0 retornamos true y si no lo es retornamos false.

```typescript
function isValidISBN(cadena: string): boolean {
  var number: number = 0;
  var count: number = 10;
  var verificacion: boolean;
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
```

### Ejercicio 7 El siguiente número.

En este ejericio creamos la función nextNumber. esta función recibe un tipo number y retornaotro number. El valor recibido lo pasamos a string y conseguimos su longitud asi como en un array basado en el string.

Realizamos un for a lo largo del array en donde vamos comparando los valores del array para ver si es posible ordenarlo y conseguir también la posición que actuará como pivote.

Lo siguiente será encontrar el número de menor valor pero siendo de mayor valor que del pivote a la derecha de este. Una vez encontrado intercambiamos las posiciones y ordenamos todo lo que se encuentre a la derecha de ese valor que hemos intercambiado de posición de menor a mayor. Realizado esto ya podremos devolver el siguiente número que se ha conseguido reposicionando los digitos.

```typescript
function nextNumber(valor: number): number {
  let str: string = String(valor);
  let str2: string = '';
  let length: number = str.length;
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

  for (let j = i + 1; j < length; j++) {
    if (+valor2[j] > x && +valor2[j] < +valor2[smallest]) {
      smallest = j;
    }
  }
  
  let y = valor2[smallest];
  valor2[smallest] = valor2[i - 1];
  valor2[i - 1] = y;
  
  str = ''
  for (let z = 0; z < i; z++) {
    str = str + valor2[z];    
  }

  for (let z = i; z < length; z++) {
    str2 = str2 + valor2[z];    
  }
  
  let sort = str2.split('').sort().join('');

  str = str + sort;

  return +str;
}
```

### Ejercicio 8 Contando IPs.

En este ejericio creamos la función ipsInRange en la cual le pasamos dos string y retornamos un tipo number. Convertimos en array las dos Ips que hemos recibido basandonos en los puntos que tienen las IPs.

Inicializamos a su vez todas las variables de tipo number que vamos a usar a 0 y empezamos un bucle for basado en los arrays de las IPs, la idea se basa en multiplicar cada posición correspondiente del array de la ip con el valos 256 elevado a la potencia correspondiente y guardarlo en una varaible que se irá incrementando conforme se va realizando el for.

Cuando tengamos el valor total de la operación para cada ip las restamos y obtenemos su valor absoluto para así conseguir el rango que hay entre ellas de IPs disponibles.

```typescript
function ipsInRange(cadena: string, cadena2: string): number {
  let ip1 = cadena.split('.');
  let ip2 = cadena2.split('.');
  let ip1_number: number = 0;
  let ip2_number: number = 0;
  let total1: number = 0;
  let total2: number = 0;
  let resultado: number = 0;
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
```

### Ejercicio 9 Entrenador Pokemon.

En este ejericio creamos la función damage, a la cual le pasamos dos string con los tipos de los pokemon y dos number con el ataque y la defensa, a su vez la función nos devolverá el daño realizado.

Lo primero es que haremos será comparar si los dos tipos son iguales, si lo són entonces retornamos la formula con su respectivo valor de efectividad.

Si no son iguales se irá comprodando en cada if para saber de que tipo es el pokemon atacante, cuando entre en su if correspondiente irá comprobando en los if anidados el tipo del pokemon atacado, y dependiendo del tipo retornará la formula con su respectivo valor de efectividad.

```typescript
function damage(type: string, type_oponent: string, attack: number, defense: number): number {

  if (type == type_oponent)
    return 50 * (attack / defense) * 0.5;

  if (type == 'fuego') {
    if (type_oponent == 'agua')
      return 50 * (attack / defense) * 0.5;
    if (type_oponent == 'hierba')
      return 50 * (attack / defense) * 2; 
    if (type_oponent == 'electrico')
      return 50 * (attack / defense) * 1;         
  }

  if (type == 'agua') {
    if (type_oponent == 'fuego')
      return 50 * (attack / defense) * 2;
    if (type_oponent == 'hierba')
      return 50 * (attack / defense) * 0.5; 
    if (type_oponent == 'electrico')
      return 50 * (attack / defense) * 0.5;         
  }

  if (type == 'hierba') {
    if (type_oponent == 'fuego')
      return 50 * (attack / defense) * 0.5;
    if (type_oponent == 'agua')
      return 50 * (attack / defense) * 2; 
    if (type_oponent == 'electrico')
      return 50 * (attack / defense) * 1;         
  }

  if (type == 'electrico') {
    if (type_oponent == 'fuego')
      return 50 * (attack / defense) * 1;
    if (type_oponent == 'agua')
      return 50 * (attack / defense) * 2; 
    if (type_oponent == 'hierba')
      return 50 * (attack / defense) * 1;         
  }
}
```

### Ejercicio 10 Validador de nombre usuario.

En este ejericio creamos la función isValidUsername que recibe un string y devuelve un booleano. La cadena pasará por distintas comprobaciones para ver si es válida, si no es válida en alguna comprobación retornará un false.

En la primera comprobación comparamos el tamaño de la cadena con 4 y con 30, si es menor de 4 o mayor que 30 no será una cadena válida.

En la segunda comprobación comprobamos si la posición inicial y final del string son guiones bajos, si lo son retornará un false.

Para la tercera comprobación creamos tres string que contengan el alfabeto en minusculas, el alfabeto en mayusculas y símbolos. Recorremos ahora toda la cadena y cuando se encuentre un caracter de los buscados pondrá una variable booleana a true, cuando haya una de las variables booleanas a false retornamos un false.

Para la cuarta comprobación añadimos un string con números del 1 al 9 y recorremos toda la cadena con un bucle for. Dentro del bucle for tenemos un if que compara cada caracter para ver si coindicide con una de los string creados con anterioridad, dentro de los if  realizamos la cuenta de repeticiones de un mismo caracter y ponemos a 0 las demás repeticiones, en el momento en el que se realizen 3 repeticiones retornará false.

```typescript
function isValidUsername(cadena: string): boolean {
  
  if(cadena.length < 4 || cadena.length > 30)
    return false;

  if(cadena.charAt(0) == '_' || cadena.charAt(cadena.length -1) == '_')
    return false

  let str1: string = 'abcdefghijklmnñopqrstuvwxyz';
  let str2: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  let str3: string = '%&-_.*?!';
  let str4: string = '123456789'
  let case1: boolean = false;
  let case2: boolean = false;
  let case3: boolean = false;

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
  
  let count1: number = 0;
  let count2: number = 0;
  let count3: number = 0;
  let valid: boolean = false;

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
```

## 4. Conclusiones

En conclusión, este tipos de ejercicios para irse iniciando en **Typescript** y si ya se tiene conocimiento en programación son bastante entretenidos, útiles y diveros, si es cierto, que hay alguno que otro que son más complicados, pero se pueden llegar a las soluciones de diversas maneras. 

## 5. Bibliografía

**[Guión Práctica 3](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/):** Guión de la práctica 3 de la asignatura de Desarrollo de Sistemas Informáticos.

**[JavaScript expresiones regulares](https://www.w3schools.com/js/js_string_methods.asp):** Tutorial sobre los métodos para usar expresiones regulares.

**[JavaScript strings](https://www.w3schools.com/js/js_regexp.asp):** Tutorial sobre los métodos para usar strings.

