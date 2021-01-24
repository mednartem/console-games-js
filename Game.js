const nameMonster = `Dragon`;
let pointsOfHealthMonster = 100;
const pointsOfDamageMonster = 20;
const lifeMonstr = true;
const nameUser = `Warrior`;
let pointsOfHealthUser = 100;
const pointsOfDamageUser = 25;
const life = true;
const ally = false;
const locationName = `Moscow`;

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

while (pointsOfHealthUser || pointsOfHealthMonster === 0) {
    if (pointsOfHealthMonster && pointsOfHealthUser >= 0) {
        console.log(`The user attacks to monster`);
        pointsOfHealthMonster -= pointsOfDamageUser;
        console.log(`Remaining health monster after attack: ${pointsOfHealthMonster}`);

        console.log(`The monster attacks to user`);
        pointsOfHealthUser -= pointsOfDamageMonster;
        console.log(`Remaining health user after attack: ${pointsOfHealthUser}\n`);
    } else {
        break;
    }
}

if (pointsOfHealthUser === 0) {
    console.log(`Game over`);
} else if (pointsOfHealthMonster === 0) {
    console.log(`Congratulations! You killed the monster`);
}
