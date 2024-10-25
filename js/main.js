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
