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
    `Name of the user: ` + `${nameUser}` + `,`,
    `Points of health: ` + `${pointsOfHealthUser}` + `,`,
    `Points of damage: ` + `${pointsOfDamageUser}` + `,`,
    `Life: ` + `${life}` + `,`,
    `Ally: ` + `${ally}`
);

console.log(
    `Name of the monster: ` + `${nameMonster}` + `,`,
    `Points of health: ` + `${pointsOfHealthMonster}` + `,`,
    `Points of damage: ` + `${pointsOfDamageMonster}` + `,`,
    `Life: ` + `${lifeMonstr}`
);

console.log(`Location: ` + `${locationName}`);

remainingHealthMonster = `${pointsOfHealthMonster}` - `${pointsOfDamageUser}` * 3;
console.log(`Remaining health monster: ` + `${remainingHealthMonster}`)

remainingHealthUser = `${pointsOfHealthUser}` - `${pointsOfDamageMonster}` * 2;
console.log(`Remaining health user: ` + `${remainingHealthUser}`)

if(remainingHealthUser >= 0) {
    console.log(`User live, the game to be continued`)
} else {
    console.log(`Game over`)
}
