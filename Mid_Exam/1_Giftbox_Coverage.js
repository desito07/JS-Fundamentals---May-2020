// Programming Fundamentals Mid Exam - 30 June 2019 Group 2
// ===========================================================

function solve(input) {
  let sizeOfSide = Number(input.shift());
  let numberOfSheetsPaper = Number(input.shift());
  let areaSingleSheet = Number(input.shift());

  let area = sizeOfSide * sizeOfSide * 6;
  // console.log(area);
  let thirdOfwantedArea = Math.floor(numberOfSheetsPaper / 3);
  let wantedArea =
    numberOfSheetsPaper * areaSingleSheet -
    thirdOfwantedArea * areaSingleSheet * 0.75;
  let percentage = (wantedArea / area) * 100;
  console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);
}
solve(["5", "30", "4"]);
solve(["2.5", "32", "4.25"]);
