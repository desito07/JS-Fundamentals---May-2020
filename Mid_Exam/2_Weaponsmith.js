// Programming Fundamentals Mid Exam - 2 November 2019 Group 1
// ==============================================================

function solve(input) {
  let parts = input.shift().split("|");

  // console.log(parts);

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let [command, position, index] = element.split(" ");
    let arr = [];

    // console.log(command);

    switch (command) {
      case "Move":
        index = +index;
        if (position === "Left") {
          if (index > 0 && index < parts.length) {
            [parts[index - 1], parts[index]] = [parts[index], parts[index - 1]];
          }
        } else if (position === "Right") {
          if (index >= 0 && index < parts.length - 1) {
            [parts[index + 1], parts[index]] = [parts[index], parts[index + 1]];
          }
        }
        break;
      case "Check":
        if (position === "Even") {
          for (let i = 0; i < parts.length; i++) {
            if (i % 2 === 0) {
              arr.push(parts[i]);
            }
          }
        } else if (position === "Odd") {
          for (let i = 0; i < parts.length; i++) {
            if (!(i % 2 === 0)) {
              arr.push(parts[i]);
            }
          }
        }
        console.log(arr.join(" "));
        break;
      case "Done":
        break;
    }
  }
  console.log(`You crafted ${parts.join("")}!`);
}
solve([
  "ha|Do|mm|om|er",
  "Move Right 0",
  "Move Left 3",
  "Check Odd",
  "Move Left 2",
  "Move Left 10",
  "Move Left 0",
  "Done",
]);
solve([
  "ri|As|er|hb|ng",
  "Move Left 1",
  "Move Right 2",
  "Move Right 3",
  "Move Left 2",
  "Done",
]);
