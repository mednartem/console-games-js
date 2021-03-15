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

function fight(firstEnity, secondEnity) {
    while(true) {
        firstEnity.attack();
        secondEnity.pointsOfHealth -= firstEnity.pointsOfDamage;
        secondEnity.showRemainingHealth();

        if (firstEnity.pointsOfHealth <= 0) {
            firstEnity.life = false;
            break;
        }

        secondEnity.attack();
        firstEnity.pointsOfHealth -= secondEnity.pointsOfDamage;
        firstEnity.showRemainingHealth();

        if (secondEnity.pointsOfHealth <= 0) {
            secondEnity.life = false;
            break;
        }
    }
}


initialGameState();

console.log(`____________START______________`);
fight(white[0], black[0]);
console.log(`____________FINISH______________\n`)

console.log(`____________START______________`);
fight(white[1], black[1]);
console.log(`____________FINISH______________\n`)



if (!white[0].life && white[1].life) {
    console.log(`Game over, The moster killed you!`);
} else if (!black[0].life && black[1].life) {
    console.log(`Congratulations! You killed the monster!`);
} else{
    console.log("Draw")
}