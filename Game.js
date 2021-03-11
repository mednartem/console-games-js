const locationName = `Moscow`;

function makeEntity(name, pointsOfHealth, pointsOfDamage, life, ally) {
   return{
        name : name,
        pointsOfHealth: pointsOfHealth,
        pointsOfDamage: pointsOfDamage,
        life: life,
        ally: ally
   }
}

let user = makeEntity(`Warrior`, 100, getRandomInt(10), true, false);
let monster = makeEntity(`Dragon`, 100, getRandomInt(10), true, false);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showMessage(message) {
    console.log(message);
}

function attackToUser() {
    showMessage(`The monster attacks to user`)
    user.pointsOfHealth -= monster.pointsOfDamage;
    showMessage(`Remaining health user after attack: ${user.pointsOfHealth}\n`)
}

function attackToMonster() {
    showMessage(`The user attacks to monster`)
    monster.pointsOfHealth -= user.pointsOfDamage;
    showMessage(`Remaining health monster after attack: ${monster.pointsOfHealth}`);
}

function initialGameState() {
    showMessage(
        `Description of the user: \n` +
        `   User name is ${user.name} \n` +
        `   Points of health equals ${user.pointsOfHealth} \n` +
        `   Points of damage equals ${user.pointsOfDamageUser} \n` +
        `   Life is ${user.life} \n` +
        `   Ally is ${user.ally} \n`
    );

    showMessage(
        `Description of the monster: \n` +
        `   Monster name is ${monster.name} \n` +
        `   Points of health equals ${monster.pointsOfHealth} \n` +
        `   Points of damage equals ${monster.pointsOfDamage} \n` +
        `   Life is ${monster.life} \n` + 
        `   Ally is ${monster.ally} \n`
    );

    showMessage(`Location is ${locationName} \n`);
}

initialGameState();
console.log(user);
console.log(monster);

while (user.pointsOfHealth || monster.pointsOfHealth <= 0) {
    if (monster.pointsOfHealth >= 0 && user.pointsOfHealth >= 0) {
        attackToMonster();
        attackToUser();
    } else {
        break;
    }
}

if (user.pointsOfHealth <= 0) {
    showMessage(`\n Game over, The moster killed you`);
} else if (monster.pointsOfHealth <= 0) {
    showMessage(`\n Congratulations! You killed the monster`);
}
