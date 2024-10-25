// ! Snack 1

const raceBicycles = [
  { name: "Scott", weight: { value: 7, unit: "kg" } },
  { name: "Genesis", weight: { value: 7.5, unit: "kg" } },
  { name: "Focus", weight: { value: 8, unit: "kg" } },
];

const raceBicyclesWeight = [];
for (const raceBicycle of raceBicycles)
  raceBicyclesWeight.push(raceBicycle.weight.value);

let lighestRaceBicycle = raceBicyclesWeight[0];
for (const raceBicycleWeight of raceBicyclesWeight)
  if (lighestRaceBicycle > raceBicycleWeight)
    lighestRaceBicycle = raceBicycleWeight;

console.log(lighestRaceBicycle);

// ! Snack 2

const soccerTeams = [
  { name: "Liverpool", points: 0, fouls: { commited: 0, drawn: 0 } },
  { name: "Arsenal", points: 0, fouls: { commited: 0, drawn: 0 } },
  { name: "Aston Villa", points: 0, fouls: { commited: 0, drawn: 0 } },
];

/**
 *
 * Returns a random integer in the specified range
 *
 * @param {number} min Minimum value of the range
 * @param {number} max Maximum value of the range
 * @returns {number}
 */
function randomIntegerNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const minPoints = 1;
const maxPoints = 21;
const minFoulsDrawn = 0;
const maxFoulsDrawn = 27;
for (const soccerTeam of soccerTeams) {
  soccerTeam.points = randomIntegerNumberInRange(minPoints, maxPoints);
  soccerTeam.fouls.drawn = randomIntegerNumberInRange(
    minFoulsDrawn,
    maxFoulsDrawn
  );
}

const soccerTeamsFoulsDrawn = [];
for (const soccerTeam of soccerTeams) {
  const {
    name,
    fouls: { drawn },
  } = soccerTeam;
  soccerTeamsFoulsDrawn.push({ name, drawn });
}

console.table(soccerTeamsFoulsDrawn);

// ! Snack 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const indexOfNumberA = 2;
const indexOfNumberB = 8;

/**
 *
 * Returns an array with the elements in the given index range
 *
 * @param {object} array
 * @param {number} index1
 * @param {number} index2
 * @returns {object}
 */
function elementsBetweenTwoIndexes(array, index1, index2) {
  const elementsInBetween = [];
  for (let i = index1 + 1; i < index2; i++) elementsInBetween.push(array[i]);
  return elementsInBetween;
}

console.table(
  elementsBetweenTwoIndexes(numbers, indexOfNumberA, indexOfNumberB)
);
