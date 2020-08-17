// Programming Fundamentals Mid Exam - 30 June 2019 Group 2
// ========================================================

function solve(input) {
  let frogs = input.shift().split(" ");
  //   console.log(frogs);
  let arr1 = [];

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let name = arr[1];
    let index = Number(arr[2]);
    // let [command, name] = input[i].split(" ");
    let count = Number(arr[1]);
    // console.log(command);
    // console.log(name);

    switch (command) {
      case "Join":
        frogs.push(arr[1]);
        // console.log(frogs);
        break;
      case "Jump":
        if (index < frogs.length && index >= 0) {
          frogs.splice(index, 0, arr[1]);
          frogs.unshift(name[0]);
        }
        // console.log(frogs);
        break;
      case "Dive":
        if (arr[1] >= 0 && arr[1] < frogs.length) {
          let dive = frogs.indexOf(arr[1]);
          frogs.shift(dive, 1);
          //   console.log(frogs.join(" "));
        }
        break;
      case "First":
        if (count > frogs.length) {
          count = frogs.length;
        }
        for (let i = 0; i < count; i++) {
          arr1.push(frogs[i]);
        }
        console.log(arr1.join(" "));
        break;
      case "Last":
        if (count > frogs.length) {
          count = 0;
        } else {
          count = frogs.length - count;
        }
        for (let i = frogs.length - 1; i >= count; i--) {
          arr1.push(frogs[i]);
        }
        console.log(arr1.reverse().join(" "));
        break;
      case "Print":
        if (arr[1] === "Normal") {
          console.log(`Frogs: ${frogs.join(" ")}`);
        } else if (arr[1] === "Reversed") {
          frogs.reverse(arr[1]);
          console.log(`Frogs: ${frogs.join(" ")}`);
        }
        break;
    }
  }
}
solve([
  "Blake Muggy Kishko",
  "Join Kvachko",
  "Dive 0",
  "First 10",
  "Print Reversed",
]);
solve([
  "A B C D E F",
  "Join G",
  "Jump Q 3",
  "Last 3",
  "Dive 2",
  "Print Normal",
]);
