// Technology Fundamentals Mid Exam - 10 March 2019 Group 1
//
function solve(input) {
  let nums = input.shift().split(" ").map(Number);
  //   console.log(nums);

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let painting = Number(arr[1]);
    let changing = Number(arr[2]);

    let index = Number(nums.indexOf(painting));
    let index1 = Number(nums.indexOf(changing));

    switch (command) {
      case "Change":
        if (nums.includes(painting)) {
          nums.splice(index, 1, changing);
        }
        // console.log(nums);
        break;
      case "Hide":
        if (nums.includes(painting)) {
          nums.splice(index, 1);
        }
        // console.log(nums);
        break;
      case "Switch":
        if (index >= 0 && index1 >= 0) {
          nums[index] = Number(changing);
          nums[index1] = Number(painting);
        }
        break;
      case "Insert":
        if (nums.length + 1 >= painting) {
          nums.splice(painting + 1, 0, changing);
        }
        break;
      case "Reverse":
        nums.reverse();
        break;
      case "END":
        break;
    }
  }
  console.log(nums.join(" "));
}
solve([
  "115 115 101 114 73 111 116 75",
  "Insert 5 114",
  "Switch 116 73",
  "Hide 75",
  "Reverse ",
  "Change 73 70",
  "Insert 10 85",
  "END",
]);
solve([
  "77 120 115 101 101 97 78 88 112 111 108 101 111 110",
  "Insert 5 32",
  "Switch 97 78",
  "Hide 88",
  "Change 120 117",
  "END",
]);
