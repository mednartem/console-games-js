const locationName = `Moscow`;
const white = [new MakeEntity('Warrior', getRandomInt(1, 10)), new MakeEntity('Archer', getRandomInt(1, 10))];
const black = [new MakeEntity('Dragon', getRandomInt(1, 10)), new MakeEntity('Ork', getRandomInt(1, 10))];

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
    console.log(white);
    console.log(black);
    console.log(`Location: ${locationName} \n`);
}

initialGameState();

while (true) {
    console.log(`____________START______________`);

    monsterOfFirstPair.attack();
    userOfFirstPair.pointsOfHealth -= monsterOfFirstPair.pointsOfDamage;
    userOfFirstPair.showRemainingHealth();

    if (userOfFirstPair.pointsOfHealth <= 0) {
        userOfFirstPair.life = false;
        break;
    }

    monsterOfSecondPair.attack();
    userOfSecondPair.pointsOfHealth -= monsterOfSecondPair.pointsOfDamage;
    userOfSecondPair.showRemainingHealth();

    if (userOfSecondPair.pointsOfHealth <= 0) {
        userOfSecondPair.life = false;
        break;
    }

    userOfFirstPair.attack();
    monsterOfFirstPair.pointsOfHealth -= userOfFirstPair.pointsOfDamage;
    monsterOfFirstPair.showRemainingHealth();

    if (monsterOfFirstPair.pointsOfHealth <= 0) {
        monsterOfFirstPair.life = false;
        break;
    }

    userOfSecondPair.attack();
    monsterOfSecondPair.pointsOfHealth -= userOfSecondPair.pointsOfDamage;
    monsterOfSecondPair.showRemainingHealth();

    if (monsterOfSecondPair.pointsOfHealth <= 0) {
        monsterOfSecondPair.life = false;
        break;
    }
    console.log(`____________FINISH______________\n`)
}

if (!userOfFirstPair.life || userOfSecondPair.life) {
    console.log(`Game over, The moster killed you!`);
} else if (!monsterOfFirstPair.life || monsterOfSecondPair.life) {
    console.log(`Congratulations! You killed the monster!`);
}
