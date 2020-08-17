// Programming Fundamentals Mid Exam Retake - 07 April 2020
//===========================================================

function shootForTheWin(input) {
  let targets = input.shift().split(" ").map(Number);
  let count = 0;
  let command = "";
//   console.log(targets);
  while (command !== "End") {
    let indexTarget = Number(command);
    if (indexTarget >= 0 && indexTarget < targets.length) {
      for (let i = 0; i < targets.length; i++) {
        let temp = targets[indexTarget];
        if (targets[i] !== -1 && i !== indexTarget) {
          if (targets[i] > temp) {
            targets[i] -= temp;
          } else if (targes[i] <= temp) {
            targets[i] += temp;
          }
        }
        targets[indexTarget] = -1;
        count++;
      }
    }
  }
  console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);