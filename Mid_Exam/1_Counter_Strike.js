// Programming Fundamentals Mid Exam Retake - 07 April 2020
// ========================================================

function counterStrike(input) {
  let energy = Number(input.shift());
  let command = input.shift();
  let counter = 0;
  let wonCounter = 0;
  let isLost = true;

  while (command != "End of battle") {
    let currentDistance = Number(command);

    if (energy >= currentDistance) {
      energy -= currentDistance;
      wonCounter++;
    } else {
      counter++;
      console.log(
        `Not enough energy! Game ends with ${wonCounter} won battles and ${energy} energy`
      );
      isLost = false;
      break;
    }

    if (wonCounter % 3 == 0) {
      energy += wonCounter;
    }

    command = input.shift();
  }
  if (isLost) {
    console.log(`Won battles: ${wonCounter}. Energy left: ${energy}`);
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
