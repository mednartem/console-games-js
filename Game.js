const locationName = `Moscow`;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function showMessage(message) {
    console.log(message);
}

const user = {
    name: `Warrior`,
    pointsOfDamage: getRandomInt(1, 10),
    pointsOfHealth: 100,
    life: true,
    ally: false,

    attackToMonster() {
        showMessage(`The user attacks to monster`)
        showMessage(`Damage monster: ${this.pointsOfDamage}`)
        monster.pointsOfHealth -= user.pointsOfDamage;
    },

    showRemainingHealth() {
        showMessage(`Remaining health user: ${user.pointsOfHealth}\n`)
    }
}

const monster = {
    name: `Dragon`,
    pointsOfDamage: getRandomInt(1, 10),
    pointsOfHealth: 100,
    life: true,
    ally: false,

    attackToUser() {
        showMessage(`The monster attacks to user`)
        showMessage(`Damage monster: ${this.pointsOfDamage}`)
        user.pointsOfHealth -= monster.pointsOfDamage;
    },

    showRemainingHealth() {
        showMessage(`Remaining health monster: ${monster.pointsOfHealth}\n`);
    }
}

function initialGameState() {
    showMessage(user);
    showMessage(monster);
    showMessage(`Location: ${locationName} \n`);
}

initialGameState();
while (true) {
    monster.attackToUser();
    user.showRemainingHealth();
    user.attackToMonster();
    monster.showRemainingHealth();
    if (user.pointsOfHealth <= 0 || monster.pointsOfHealth <= 0) {
        break;
    }
}

if (user.pointsOfHealth <= 0) {
    showMessage(`Game over, The moster killed you!`);
} else if (monster.pointsOfHealth <= 0) {
    showMessage(`Congratulations! You killed the monster!`);
}
