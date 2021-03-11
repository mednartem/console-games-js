const locationName = `Moscow`;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showMessage(message) {
    console.log(message);
}

function makeEntity(name, pointsOfDamage, pointsOfHealth = 100, life = true, ally = false) {
    return {
        name: name,
        pointsOfDamage: pointsOfDamage,
        pointsOfHealth: pointsOfHealth,
        life: life,
        ally: ally
    }
}

let user = makeEntity(`Warrior`, getRandomInt(10));
let monster = makeEntity(`Dragon`, getRandomInt(10));

function attackToUser() {
    showMessage(`The monster attacks to user`)
    user.pointsOfHealth -= monster.pointsOfDamage;
    showMessage(`Remaining health user after attack: ${user.pointsOfHealth}\n`)
}

function attackToMonster() {
    showMessage(`The user attacks to monster`)
    monster.pointsOfHealth -= user.pointsOfDamage;
    showMessage(`Remaining health monster after attack: ${monster.pointsOfHealth}\n`);
}

function initialGameState() {
    console.log(user);
    console.log(monster);
    showMessage(`Location: ${locationName} \n`);
}

initialGameState();
while (true) {
    attackToUser();
    attackToMonster();
    if (user.pointsOfHealth <= 0 || monster.pointsOfHealth <= 0) {
        break;
    }
}

if (user.pointsOfHealth <= 0) {
    showMessage(`Game over, The moster killed you!`);
} else if (monster.pointsOfHealth <= 0) {
    showMessage(`Congratulations! You killed the monster!`);
}
