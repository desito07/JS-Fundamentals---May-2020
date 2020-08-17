function houseParty(arr) {
  let newArr = [];

  for (let infoLine of arr) {
    let info = infoLine.split(" ");
    let name = info[0];

    if (!info.includes("not")) {
      if (!newArr.includes(name)) {
        newArr.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      if (newArr.includes(name)) {
        newArr = newArr.filter((x) => x !== name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(newArr.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
