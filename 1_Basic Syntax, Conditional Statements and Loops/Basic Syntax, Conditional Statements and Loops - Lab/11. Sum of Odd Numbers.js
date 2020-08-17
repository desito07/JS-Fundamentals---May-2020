function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = 0;
    let currentNum = 1;
  
    while (counter < n) {
      if (currentNum % 2 !== 0) {
        console.log(currentNum);
        sum += currentNum;
        counter++;
      }
      currentNum++;
    }
    console.log(`Sum: ${sum}`);
  }
  sumOfOddNumbers(5);