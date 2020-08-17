function printAndSum(start, end) {
    let sum = 0;
    let currentNum = "";
    for (let i = start; i <= end; i++) {
      sum += i;
      currentNum += i + " ";
    }
    console.log(currentNum);
    console.log(`Sum: ${sum}`);
  }
  printAndSum(5, 10);