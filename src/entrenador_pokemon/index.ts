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

console.log('El daño realizado es de: ' + damage('fuego', 'hierba', 15, 15));
console.log('El daño realizado es de: ' + damage('fuego', 'agua', 15, 15));
console.log('El daño realizado es de: ' + damage('agua', 'fuego', 15, 15));
console.log('El daño realizado es de: ' + damage('electrico', 'fuego', 15, 15));