// Programming Fundamentals Mid Exam - 30 June 2019 Group 1
// ========================================================

function solve(input) {
  let contacts = input.shift().split(" ");
  // console.log(contacts);

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let item = arr[1];
    let index = Number(arr[1]);
    let count = Number(arr[2]);
    let startIndex = Number(arr[1]);
    switch (command) {
      case "Add":
        if (!contacts.includes(item)) {
          contacts.push(item);
        } else {
          index = contacts.indexOf(item);
          if (index >= 0 && index < contacts.length) {
            contacts.splice(index, 0, item);
          }
        }
        break;
      case "Remove":
        if (index >= 0 && index < contacts.length) {
          contacts.splice(index, 1);
        }
        break;
      case "Export":
        let arr1 = [];
        if (count >= contacts.length) {
          count = contacts.length;
        }
        for (let i = startIndex; i < count; i++) {
          arr1.push(contacts[i]);
        }
        console.log(arr1.join(" "));
        break;
      case "Print":
        if (arr[1] === "Normal") {
          console.log(`Contacts: ${contacts.join(" ")}`);
        } else if (arr[1] === "Reversed") {
          console.log(`Contacts: ${contacts.reverse().join(" ")}`);
        }
        break;
    }
  }
}
solve([
  "Alisson Bellamy Candace Tristan",
  "Remove 3",
  "Add Bellamy 2",
  "Print Normal",
]);
solve([
  "Zayn Katy Ariana Avril Nick Mikolas",
  "Remove 3",
  "Add Jacob 0",
  "Export 0 3",
  "Export 3 8",
  "Print Reversed",
]);
