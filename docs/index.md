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

En este ejercicio creamos la función isLeapYear en la cual recibe un valor númerico positivo, que inidica un año, y retorna un booleano si el año es bisiesto. Para realizarlo hacemos una serie de if y else anidados con las condiciones puestas en el enunciado que son:

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

```typescript
function factorial(valor: number): number {
  if (valor == 0) {
    return valor = 1;    
  }
  return valor * factorial(valor - 1);
}
```

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

```typescript
function onePunch(cadena: string): string {
  return cadena == '' ? 'Broken!' :  cadena.replace(/[eaEA]/g, '').split(" ").sort().join(' '); 
}
```

### Ejercicio 6 Conversor ISBN.

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

