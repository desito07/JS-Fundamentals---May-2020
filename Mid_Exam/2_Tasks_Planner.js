// Programming Fundamentals Mid Exam - 30 June 2019 Group 2
// ========================================================

function solve(input) {
  let tasks = input.shift().split(" ");
  // console.log(tasks);

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let index = arr[1];
    let time = arr[2];

    // console.log(arr);
    // console.log(command);
    // console.log(index);
    // console.log(time);

    switch (command) {
      case "Complete":        
        if (index > 0 && index < tasks.length) {
          tasks[index] = "0";          
          //   console.log(tasks);
        }
        break;
      case "Change":        
        if (index >= 0 && index < tasks.length) {
          tasks[index] = time;          
          //   console.log(tasks);
        }
        break;
      case "Drop":        
        if (index >= 0 && index < tasks.length) {
          tasks[index] = "-1";          
          //   console.log(tasks);
        }
        break;
      case "Count":
        if (index === "Complete") {
            console.log(tasks.filter(t => t === 0).length);          
        } else if (index === "Incomplete") {
            console.log(tasks.filter(t => t > 0).length);        
        } else if (index === "Dropped") {
            console.log(tasks.filter(t => t < 0).length);          
        }
        break;
      case "End":
        break;
    }
   
  }
  console.log(tasks.filter(t => t > 0).join(' '));
}
solve([
  "1 -1 2 3 4 5",
  "Complete 4",
  "Change 0 4",
  "Drop 3",
  "Count Dropped",
  "End",
]);
