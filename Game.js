const nameMonster = `Dragon`;
let pointsOfHealthMonster = 100;
let pointsOfDamageMonster;
const lifeMonstr = true;
const nameUser = `Warrior`;
let pointsOfHealthUser = 100;
let pointsOfDamageUser;
const life = true;
const ally = false;
const locationName = `Moscow`;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showMessage(message) {
    console.log(message);
}

function attackMonster() {
    showMessage(`The monster attacks to user`)
    pointsOfHealthUser -= pointsOfDamageMonster;
    showMessage(`Remaining health user after attack: ${pointsOfHealthUser}\n`)
}

function attackUser() {
    showMessage(`The user attacks to monster`)
    pointsOfHealthMonster -= pointsOfDamageUser;
    showMessage(`Remaining health monster after attack: ${pointsOfHealthMonster}`);
}

function initialGameState() {
    showMessage(
        `Description of the user: \n` +
        `   User name is ${nameUser} \n` +
        `   Points of health equals ${pointsOfHealthUser} \n` +
        `   Points of damage equals ${pointsOfDamageUser} \n` +
        `   Life is ${life} \n` +
        `   Ally is ${ally} \n`
    );

    showMessage(
        `Description of the monster: \n` +
        `   Monster name is ${nameMonster} \n` +
        `   Points of health equals ${pointsOfHealthMonster} \n` +
        `   Points of damage equals ${pointsOfDamageMonster} \n` +
        `   Life is ${lifeMonstr} \n`
    );

    showMessage(`Location is ${locationName} \n`);
}

while (pointsOfHealthUser || pointsOfHealthMonster <= 0) {
    pointsOfDamageMonster = getRandomInt(10);
    pointsOfDamageUser = getRandomInt(10);
    if (pointsOfHealthMonster >= 0 && pointsOfHealthUser >= 0) {
        attackMonster();
    } else {
        break;
    }

    if (pointsOfHealthUser >= 0 && pointsOfHealthMonster >= 0) {
        attackUser();
    } else {
        break;
    }
}

if (pointsOfHealthUser <= 0) {
    showMessage(`\n Game over, The moster killed you`);
} else if (pointsOfHealthMonster <= 0) {
    showMessage(`\n Congratulations! You killed the monster`);
}


