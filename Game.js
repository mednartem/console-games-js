const locationName = `Moscow`;
const dragon = new MakeEntity('Dragon', getRandomInt(1, 10));
// const ork = new Monster('Dragon', getRandomInt(1, 10));
const warrior = new MakeEntity('Warrior', getRandomInt(1, 10));
// const archer = new User('Archer', getRandomInt(1, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function MakeEntity(name, pointsOfDamage, pointsOfHealth = 100, life = true, ally = false) {
    this.name = name;
    this.pointsOfDamage = pointsOfDamage;
    this.pointsOfHealth = pointsOfHealth;
    this.life = life;
    this.ally = ally;

    this.attack = function () {
        console.log(`The ${this.name} attacks`)
        console.log(`Damage ${this.name}: ${this.pointsOfDamage}`)
    };

    this.showRemainingHealth = function () {
        console.log(`Remaining health ${this.name}: ${this.pointsOfHealth}\n`)
    };
}

function initialGameState() {
    console.log(warrior);
    console.log(dragon);
    console.log(`Location: ${locationName} \n`);
}

initialGameState();

while (true) {
    console.log(`____________START______________`)
    dragon.attack();
    warrior.pointsOfHealth -= dragon.pointsOfDamage;
    warrior.showRemainingHealth();

    if (warrior.pointsOfHealth <= 0) {
        warrior.life = false;
        break;
    }
    warrior.attack();
    dragon.pointsOfHealth -= warrior.pointsOfDamage;
    dragon.showRemainingHealth();

    if (dragon.pointsOfHealth <= 0) {
        dragon.life = false;
        break;
    }
    console.log(`____________FINISH______________\n`)
}

if (!warrior.life) {
    console.log(`Game over, The moster killed you!`);
} else if (!dragon.life) {
    console.log(`Congratulations! You killed the monster!`);
}
