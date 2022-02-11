const locationName = `Moscow`;
const kind = [new Entity('Warrior', getRandomInt(1, 10)), new Entity('Archer', getRandomInt(1, 10))];
const evil = [new Entity('Dragon', getRandomInt(1, 10)), new Entity('Ork', getRandomInt(1, 10))];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Entity(name, pointsOfDamage, pointsOfHealth = 10, life = true, ally = false) {
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
        console.log(`Remaining health ${this.name} = ${this.pointsOfHealth}\n`)
    };
}

function initialGameState() {
    console.log(`\n____________START GAME______________\n`);
    console.log(`Location: ${locationName} \n`);
}

function getFirstAliveEntity(entities) {
    return entities.find(entity => entity.life == true);
}

function finishGame(kinds, evils) {
    if (getFirstAliveEntity(evils) === undefined) {
        console.log(`Congratulations! You killed all the monster!\n`);
    } else if (getFirstAliveEntity(kinds) === undefined) {
        console.log(`Game over, The moster killed you!\n`);
    } else {
        console.log("You need to think how improve this code...\n");
    }

    console.log(`____________FINISH GAME______________\n`);
}

function fight(kind, evil) {
    console.log(`START FIGHT ${kind.name} VS ${evil.name}\n`);

    while (true) {
        kind.attack();
        evil.pointsOfHealth -= kind.pointsOfDamage;
        evil.showRemainingHealth();

        if (evil.pointsOfHealth <= 0) {
            evil.life = false;
            console.log(`${kind.name} killed the monster ${evil.name}!\n`)
            break;
        }

        evil.attack();
        kind.pointsOfHealth -= evil.pointsOfDamage;
        kind.showRemainingHealth();

        if (kind.pointsOfHealth <= 0) {
            kind.life = false;
            console.log(`Sorry, the ${evil.name} killed ${kind.name}!\n`)
            break;
        }
    }
    console.log(`FINISH FIGHT\n\n`);
}

function war(kinds, evils) {
    while (true) {
        let kind = getFirstAliveEntity(kinds);
        let evil = getFirstAliveEntity(evils);

        if (kind === undefined || evil === undefined) {
            break;
        }

        fight(kind, evil);
    }
}


initialGameState();
war(kind, evil);
finishGame(kind, evil);