function attack (damage) {
  var res = parseInt(damage);
  return res;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var damage;
  damage = (damagePerAttack - 2) * numberOfAttacks;
  return attack(damage);
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90