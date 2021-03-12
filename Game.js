const locationName = `Moscow`;
const monster = new Monster('Dragon', getRandomInt(1, 10));
const user = new User('Warrior', getRandomInt(1, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function User(name, pointsOfDamage, pointsOfHealth = 100, life = true, ally = false) {
    this.name = name;
    this.pointsOfDamage = pointsOfDamage;
    this.pointsOfHealth = pointsOfHealth;
    this.life = life;
    this.ally = ally;

    this.attackToMonster = function () {
        console.log(`The user attacks to monster`)
        console.log(`Damage monster: ${this.pointsOfDamage}`)
        monster.pointsOfHealth -= this.pointsOfDamage;
    };

    this.showRemainingHealth = function () {
        console.log(`Remaining health user: ${this.pointsOfHealth}\n`)
    };
}

function Monster(name, pointsOfDamage, pointsOfHealth = 100, life = true, ally = false) {
    this.name = name;
    this.pointsOfDamage = pointsOfDamage;
    this.pointsOfHealth = pointsOfHealth;
    this.life = life;
    this.ally = ally;

    this.attackToUser = function () {
        console.log(`The monster attacks to user`);
        console.log(`Damage monster: ${this.pointsOfDamage}`);
        user.pointsOfHealth -= this.pointsOfDamage;
    };

    this.showRemainingHealth = function () {
        console.log(`Remaining health monster: ${this.pointsOfHealth}\n`);
    };
}

function initialGameState() {
    console.log(`USER \nName: ${user.name}`, `\nPoints of damage: ${user.pointsOfDamage}`, `\nPoints of health: ${user.pointsOfHealth}`, `\nLife: ${user.life}`, `\nAlly: ${user.ally}\n`);
    console.log(`MONSTER \nName: ${monster.name}`, `\nPoints of damage: ${monster.pointsOfDamage}`, `\nPoints of health: ${monster.pointsOfHealth}`, `\nLife: ${monster.life}`, `\nÀlly: ${monster.ally}\n`);
    console.log(`Location: ${locationName} \n`);
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
    console.log(`Game over, The moster killed you!`);
} else if (monster.pointsOfHealth <= 0) {
    console.log(`Congratulations! You killed the monster!`);
}
