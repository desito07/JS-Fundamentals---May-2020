// Programming Fundamentals Mid Exam - 5 July 2020
// 1 ===============================================
// function solve(input) {
//   let em1 = Number(input.shift());
//   let em2 = Number(input.shift());
//   let em3 = Number(input.shift());
//   let efficiencyPerHour = em1 + em2 + em3;
//   let peopleCount = Number(input.shift());
//   let time = 0;

//   while (peopleCount > 0) {
//     time++;

//     if (time % 4 === 0) {
//       time++;
//     }
//     peopleCount -= efficiencyPerHour;
//   }
//   console.log(`Time needed: ${time}h.`);
// }
// solve(["5", "6", "4", "20"]);
// solve(["1", "2", "3", "45"]);
// solve(["3", "2", "5", "40"]);
// 2 ===========================================
// function solve(input) {
//   let nums = input.shift().split(" ");
//   //   console.log(nums);
//   for (let i = 0; i < input.length; i++) {
//     let arr = input[i].split(" ");
//     let command = arr[0];
//     let index = Number(arr[1]);
//     let index1 = Number(arr[2]);

//     switch (command) {
//       case "swap":
//         if (index >= 0 && index1 >= 0) {
//           let temp = Number(nums[index]);
//           nums[index] = nums[index1];
//           nums[index1] = temp;
//         }
//         break;
//       case "multiply":
//         if (index >= 0 && index1 >= 0) {
//           nums[index] = nums[index1] * nums[index];
//         }
//         break;
//       case "decrease":
//         let decreaseMe = 1;
//         for (let i = 0; i < nums.length; i++) {
//           nums[i] = nums[i] - decreaseMe;
//         }
//         break;
//       case "end":
//         break;
//     }
//   }
//   console.log(nums.join(", "));
// }
// solve([
//   "23 -2 321 87 42 90 -123",
//   "swap 1 3",
//   "swap 3 6",
//   "swap 1 0",
//   "multiply 1 2",
//   "multiply 2 1",
//   "decrease",
//   "end",
// ]);
// solve([
//   "1 2 3 4",
//   "swap 0 1",
//   "swap 1 2",
//   "swap 2 3",
//   "multiply 1 2",
//   "decrease",
//   "end",
// ]);
// 3 ========================================
// function solve(input) {
//   let arr = input[0].split(" ").map(Number);
//   //   console.log(arr);
//   let sum = 0;
//   let avr = 1;
//   let arr1 = [];
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let element = Number(arr[i]);
//     sum += element;
//     avr = Number(sum / arr.length);
//   }
//   avr = Number(sum / arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (element > avr) {
//       arr1.push(element);
//       arr1.sort((a, b) => b - a);
//       arr1.splice(5);
//     }
//   }
//   if (arr1.length === result) {
//     console.log("No");
//   } else {
//     console.log(arr1.join(" "));
//   }
// }
// solve(["10 20 30 40 50"]);
// solve(["5 2 3 4 -10 30 40 50 20 50 60 60 51"]);
// solve(["1"]);
// solve(["-1 -2 -3 -4 -5 -6"]);
// ================================================