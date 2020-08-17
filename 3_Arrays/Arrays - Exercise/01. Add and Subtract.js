function addOrSubtract(arr) {
    let arrNew = [];
    let arrNewSum = 0;
    let arrSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      arrSum += arr[i];
      let result = arr[i];
      if (result % 2 === 0) {
        result += i;
        arrNewSum += result;
      } else {
        result -= i;
        arrNewSum += result;
      }
  
      arrNew.push(result);
    }
    console.log(arrNew);
    console.log(arrSum);
    console.log(arrNewSum);
  }
  addOrSubtract([5, 15, 23, 56, 35]);
  