const nameMonster = "Dragon";
const pointsOfHealthMonster = 100;
const pointsOfDamageMonster = 10;
const lifeMonstr = true;
const nameUser = "Warrior";
const pointsOfHealthUser = 100;
const pointsOfDamageUser = 15;
const life = true;
const ally = false;
const locationName = "Moscow";
let remainingHealthMonster;
let remainingHealthUser;

console.log(
    "name of the user: " + nameUser + ",",
    "points of health: " + pointsOfHealthUser + ",",
    "points of damage: " + pointsOfDamageUser + ",",
    "life: " + life + ",",
    "ally: " + ally
);

console.log(
    "name of the monster: " + nameMonster + ",",
    "points of health: " + pointsOfHealthMonster + ",",
    "points of damage: " + pointsOfDamageMonster + ",",
    "life: " + lifeMonstr
);

console.log(locationName);

remainingHealthMonster = pointsOfHealthMonster - pointsOfDamageUser * 3;
console.log("remaining health monster: " + remainingHealthMonster)

remainingHealthUser = pointsOfHealthUser - pointsOfDamageMonster * 2;
console.log("remaining health user: " + remainingHealthUser)

if(remainingHealthUser >= 0) {
    console.log("user live, game to be continued")
} else {
    console.log("game over")
}
