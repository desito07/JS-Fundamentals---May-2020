// Technology Fundamentals Mid Exam - 10 March 2019 Group 2
// ==========================================================

function solve(input) {
  let days = Number(input.shift());
  let countPlayers = Number(input.shift());
  let groupsEnergy = Number(input.shift());
  let waterPerPersonPerDay = Number(input.shift());
  let foodPerPersonPerDay = Number(input.shift());

  let groupsWater = waterPerPersonPerDay * countPlayers * days;
  let groupsFood = (foodPerPersonPerDay * countPlayers * days);

  let counter = 0;
  let currentFood = 0;

  while (counter < days) {
    let currentEnergy = Number(input.shift());
    counter++;
    groupsEnergy -= currentEnergy;

    if (groupsEnergy <= 0) {
      break;
    }

    if (counter % 2 === 0) {
      groupsEnergy *= 1.05;
      groupsWater *= 0.7;
    }

    if (counter % 3 === 0) {
      groupsEnergy *= 1.1;
      currentFood = groupsFood / countPlayers;
      groupsFood -= currentFood;
    }
  }
  if (groupsEnergy <= 0) {
    console.log(
      `You will run out of energy. You will be left with ${groupsFood.toFixed(
        2
      )} food and ${groupsWater.toFixed(2)} water.`
    );
  } else {
    console.log(
      `You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(
        2
      )} energy!`
    );
  }
}
solve([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
  "",
]);
solve([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
  "",
]);
