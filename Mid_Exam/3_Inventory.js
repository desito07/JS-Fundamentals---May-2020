// Programming Fundamentals Mid Exam - 29 February 2020 Group 1
// =============================================================

function inventory(input) {
  let materials = input.shift().split(", ");
  //   console.log(materials);

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let [command, item, itemNew] = element.split(" - ");

    switch (command) {
      case "Collect":
        if (!materials.includes(item)) {
          materials.push(item);
        }
        break;
      case "Drop":
        if (materials.includes(item)) {
          let removed = materials.indexOf(item);
          materials.splice(removed, 1);
        }
        break;
      case "Combine Items":
        let [item1, item2] = item.split(":");
        // console.log(item1);
        // console.log(item2);
        let combined = materials.indexOf(item1);
        if (combined >= 0) {
          materials.splice(combined + 1, 0, item2);
        }
        break;
      case "Renew":
        if (materials.includes(item)) {
          let renewed = materials.indexOf(item);
          materials.splice(renewed, 1);
          materials.push(item);
        }
        break;
      case "Craft!":
        break;
    }
  }
  console.log(materials.join(", "));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
