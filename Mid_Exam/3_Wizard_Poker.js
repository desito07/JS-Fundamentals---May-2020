// Programming Fundamentals Mid Exam - 2 November 2019 Group 1
// ===========================================================

function solve(input) {
  let cards = input.shift().split(":");
  // console.log(cards);
  let arr1 = [];

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let name = arr[1];
    let index = Number(arr[2]);
    switch (command) {
      case "Add":
        if (cards.includes(name)) {
          arr1.push(name);
        } else {
          console.log("Card not found.");
        }
        break;
      case "Insert":
        if (cards.includes(name) && index >= 0 && index < cards.length - 1) {
          arr1.splice(index, 0, name);
        } else {
          console.log("Error!");
        }
        break;
      case "Remove":
        if (arr1.includes(name)) {
          arr1 = arr1.filter((a) => a !== name);
        } else {
          console.log("Card not found.");
        }
        break;
      case "Swap":
        arr1 = arr1.filter((a) => a !== arr1[1]);
        arr1.unshift(arr[2]);
        break;
      case "Shuffle":
        arr1.reverse(name);
        break;
      case "Ready":
        break;
    }
  }
  console.log(arr1.join(" "));
}
solve([
  "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
  "Add Moonfire",
  "Add Pounce",
  "Add Bite",
  "Add Wrath",
  "Insert Claw 0",
  "Swap Claw Moonfire",
  "Remove Bite",
  "Shuffle deck",
  "Ready",
]);
// solve([
//     'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
//     'Add Pop',
//     'Add Exodia',
//     'Add Aso',
//     'Remove Wrath',
//     'Add SineokBqlDrakon',
//     'Shuffle deck',
//     'Insert Pesho 0',
//     'Ready'
//   ]
//   );
//   solve([
//     'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
//     'Remove Pounce',
//     'Add Pounce',
//     'Remove Pounce',
//     'Add Wrath',
//     'Ready'
//   ]
//   )
