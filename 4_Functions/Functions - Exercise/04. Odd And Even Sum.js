function oddAndEvenSum(num) {
    num = String(num);
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < num.length; i++) {
      let element = Number(num[i]);
      if (element % 2 === 0) {
        sumEven += element;
      } else {
        sumOdd += element;
      }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
  }
  oddAndEvenSum(1000435);