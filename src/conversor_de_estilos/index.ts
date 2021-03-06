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
  

console.log(fromSnakeToCamelCase('the_stealth_warrior'));
console.log(fromCameToSnakeCase('theStealhWarrior'));


