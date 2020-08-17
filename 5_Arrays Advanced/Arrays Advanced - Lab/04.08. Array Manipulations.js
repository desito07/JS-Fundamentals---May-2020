function arrayManipulations(arr) {
  let numbers = arr
    .shift()
    .split(" ")
    .map((x) => Number(x));
  // console.log(numbers);

  for (let element of arr) {
    // let [command, firstValue, secondValue] = element.split(" ");
    let arrNew = element.split(" ");
    let command = arrNew[0];
    let firstValue = Number(arrNew[1]);
    let secondValue = Number(arrNew[2]);

    switch (command) {
      case "Add":
        numbers.push(firstValue);
        break;
      case "Remove":
        // numbers.splice(numbers.indexof(firstValue, 1);
        numbers = numbers.filter((x) => x !== firstValue);
        break;
      case "RemoveAt":
        numbers.splice(firstValue, 1);
        break;
      case "Insert":
        numbers.splice(secondValue, 0, firstValue);
        break;
    }
  }
  console.log(numbers.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
