// Programming Fundamentals Mid Exam - 30 June 2019 Group 1
// ========================================================

function solve(input) {
  let nums = input.shift().split(" ").map(Number);
  // console.log(nums);

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let index = Number(arr[1]);
    let value = Number(arr[2]);

    let sumNeg = 0;
    let sumPos = 0;
    let sumAll = 0;
    switch (command) {
      case "Switch":
        if (index > 0) {
          nums[index] = nums[index] * -1;
        } else if (index <= 0) {
          nums[index] = nums[index] * -1;
        }
        // console.log(nums);
        break;
      case "Change":
        if (index >= 0 && index < nums.length - 1) {
          nums.splice(index, 1, value);
        }
        // console.log(nums);
        break;
      case "Sum":
        if (arr[1] === "Negative") {
          for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
              sumNeg += nums[i];
            }
          }
          console.log(sumNeg);
        } else if (arr[1] === "Positive") {
          for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
              sumPos += nums[i];
            }
          }
          console.log(sumPos);
        } else if (arr[1] === "All") {
          for (let i = 0; i < nums.length; i++) {
            sumAll += nums[i];
          }
          console.log(sumAll);
        }
        break;
      case "End":
        break;
    }
  }
  nums = nums.filter((a) => a >= 0);
  console.log(nums.join(" "));
}
solve(["1 2 3 4 5", "Switch 4", "Change 0 -3", "Sum Negative", "End"]);
solve([
  "1 2 3 4 5 4 3 2 1 0",
  "Switch -4",
  "Change 13 0",
  "Switch 0",
  "Sum All",
  "End",
]);
