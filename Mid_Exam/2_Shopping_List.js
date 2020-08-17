// Programming Fundamentals Mid Exam - 29 February 2020 Group 2
// ==============================================================

function shoppingList(input) {
  let items = input.shift().split("!");
  //   console.log(items);

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let [command, product, productNew] = element.split(" ");
    // let shopping = input.shift().split(" ");
    // let command = shopping[0];
    // let product = shopping[1];
    // let productNew = shopping[2];
    // console.log(shopping);
    switch (command) {
      case "Urgent":
        if (!items.includes(product)) {
          items.unshift(product);
        }
        break;
      case "Unnecessary":
        if (items.includes(product)) {
          let unnecessaryProduct = items.indexOf(product);
          items.splice(unnecessaryProduct, 1);
        }
        break;
      case "Correct":
        if (items.includes(product)) {
          let correctProduct = items.indexOf(product);
          items.splice(correctProduct, 1, productNew);
        }
        break;
      case "Rearrange":
        if (items.includes(product)) {
          let rearrangeProduct = items.indexOf(product);
          items.splice(rearrangeProduct, 1);
          items.push(product);
        }
        break;
      case "Go":
        break;
    }
  }
  console.log(items.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes ",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
