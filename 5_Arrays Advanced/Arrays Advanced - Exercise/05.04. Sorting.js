
function sorting(arr) {
  arr.sort((a, b) => a - b);
  // console.log(arr);

  let newArr = [];

  for (let i = 0; i < arr.length + 6; i++) {
    let biggestNum = arr.pop();
    let smallestNum = arr.shift();
    newArr.push(biggestNum, smallestNum);
  }
  console.log(newArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
