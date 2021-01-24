const nameMonster = `Dragon`;
const pointsOfHealthMonster = 100;
const pointsOfDamageMonster = 10;
const lifeMonstr = true;
const nameUser = `Warrior`;
const pointsOfHealthUser = 100;
const pointsOfDamageUser = 15;
const life = true;
const ally = false;
const locationName = `Moscow`;
let remainingHealthMonster;
let remainingHealthUser;

console.log(
    `Description of the user: \n` + 
    `   User name is ${nameUser} \n` + 
    `   Points of health equals ${pointsOfHealthUser} \n` +
    `   Points of damage equals ${pointsOfDamageUser} \n` +
    `   Life is ${life} \n` +
    `   Ally is ${ally} \n`
);

console.log(
    `Description of the monster: \n` + 
    `   Monster name is ${nameMonster} \n` + 
    `   Points of health equals ${pointsOfHealthMonster} \n` +
    `   Points of damage equals ${pointsOfDamageMonster} \n` + 
    `   Life is ${lifeMonstr} \n`
);

console.log(`Location is ${locationName} \n`);

remainingHealthMonster = `${pointsOfHealthMonster}` - `${pointsOfDamageUser}` * 3;
console.log(`Remaining health monster after attack: ${remainingHealthMonster}`)

remainingHealthUser = `${pointsOfHealthUser}` - `${pointsOfDamageMonster}` * 2;
console.log(`Remaining health user after attack: ${remainingHealthUser}\n`)

if(remainingHealthUser >= 0) {
    console.log(`User live, the game to be continued`)
} else {
    console.log(`Game over`)
}
