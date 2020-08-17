// Programming Fundamentals Mid Exam - 2 November 2019 Group 2
// ============================================================

function friendlistMaintenance(input) {
  let friends = input.shift().split(", ");
  let lostNamesCount = 0;
  let blacklistedNamesCount = 0;
  // console.log(friends);

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let arr = element.split(" ");
    // let [command, name, newName] = element.split(" ");
    let command = arr[0];
    let name = arr[1];
    let newName = arr[2];

    // console.log(command);
    // console.log(item);
    // console.log(newName);

    switch (command) {
      case "Blacklist":
        if (friends.includes(name)) {
          let index = friends.indexOf(name);
          friends.splice(index, 1, 'Blacklisted');
          console.log(`${name} was blacklisted.`);
          blacklistedNamesCount++;
        } else {
          console.log(`${name} was not found.`);
        }
        break;
      case "Error":
        let nameIndex = friends[Number(arr[1])];
        if (nameIndex !== "Blacklisted" && nameIndex !== "Lost") {
          let index = friends.indexOf(nameIndex);
          friends.splice(index,1,"Lost");
          console.log(`${nameIndex} was lost due to an error.`);
          lostNamesCount++;
        }
        break;
      case "Change":
        let index = Number(arr[1]);
        let current = friends[index];
        if(friends.length > index && index >= 0){
          friends.splice(index, 1, newName);
        console.log(`${current} changed his username to ${newName}.`);          
        }        
        break;
      case "Report":
        break;
    }
  }
  console.log(`Blacklisted names: ${blacklistedNamesCount}`);
  console.log(`Lost names: ${lostNamesCount}`);
  console.log(friends.join(' '));  
}
friendlistMaintenance([
  "Mike, John, Eddie",
  "Blacklist Mike",
  "Error 0",
  "Error 1",
  "Change 2 Mike123",
  "Report",
]);
// friendlistMaintenance([
//   'Mike, John, Eddie, William',
//   'Error 3',
//   'Error 3',
//   'Change 0 Mike123',
//   'Blacklist Eddie',
//   'Report'
// ]
// );
// friendlistMaintenance([
//   'Mike, John, Eddie, William',
//   'Blacklist Mike',
//   'Error 1',
//   'Blacklist Eddie',
//   'Error 3',
//   'Report'
// ]
// );
