// Programming Fundamentals Mid Exam - 2 November 2019 Group 2
// ===========================================================

function solve(input) {
  let tanks = input.shift().split(",");
  //   console.log(tanks);

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(",");
    let command = arr[0];
    let name = arr[1];
    let newName = arr[2];
    let index = Number(tanks.indexOf(name));
    // console.log(arr);
    // console.log(command);

    switch (command) {
      case "Add":
        if (tanks.includes(arr[1])) {
          console.log("Tank is already bought");
        } else {
          tanks.push(arr[1]);
          console.log("Tank successfully bought");
        }
        break;
      case "Remove":
        break;
      case "Remove At":
        break;
      case "Insert":
        if (index >= 0) {
          if (tanks.includes(arr[2])) {
            console.log("Tank is already bought");
          } else {
            tanks.splice(index, 0, newName);
            console.log("Tank successfully bought");
          }
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }
  console.log(tanks);
}
solve([
  "T-34-85 Rudy, SU-100Y, STG",
  "3",
  "Add, King Tiger(C)",
  "Insert, 2, IS-2M",
  "Remove, T-34-85 Rudy",
]);
//   solve([
//     'T 34, T 34 B, T92, AMX 13 57',
//     '4',
//     'Add, T 34',
//     'Remove, AMX CDC',
//     'Insert, 10, M60',
//     'Remove At, 1'
//   ]
//   );
