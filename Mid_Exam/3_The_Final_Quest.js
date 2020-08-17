// Technology Fundamentals Mid Exam - 10 March 2019 Group 2
//=========================================================

function solve(input) {
  let words = input.shift().split(" ");
  // console.log(words);

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let task = arr[1];

    let index = Number(words.indexOf(arr[1]));
    let index1 = Number(words.indexOf(arr[2]));

    // console.log(arr);
    switch (command) {
      case "Delete":
        index = Number(arr[1]);
        if (index >= 0 && words.length > index) {
          words.splice([index + 1], 1);
        }
        break;
      case "Swap":
        if (index >= 0 && index1 >= 0) {
          words[index] = arr[2];
          words[index1] = arr[1];
        }
        break;
      case "Put":
        index = Number(arr[2]);
        if (index >= 0 && words.length > index) {
          words.splice([index - 1], 0, arr[1]);
        }
        break;
      case "Sort":        
        words.sort((a, b) => b.localeCompare(a));
        break;
      case "Replace":
        if (index1 >= 0) {
          words[index1] = arr[1];
        }
        break;
      case "Stop":
        break;
    }
  }
  console.log(words.join(" "));
}
solve([
  "Congratulations! You last also through the have challenge!",
  "Swap have last",
  "Replace made have",
  "Delete 2",
  "Put it 4",
  "Stop",
  "",
]);
solve([
  "This the my quest! final",
  "Put is 2",
  "Swap final quest!",
  "Delete 2",
  "Stop",
  "",
]);
