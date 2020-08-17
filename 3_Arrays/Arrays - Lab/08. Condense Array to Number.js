function condenseArrayToNumber(arr) {
    let arrNew = arr;
    while (arrNew.length > 1) {
      let result = [];
      for (let i = 0; i < arrNew.length - 1; i++) {
        result[i] = arrNew[i] + arrNew[i + 1];
      }
      arrNew = result;
    }
    console.log(arrNew[0]);
  }
  condenseArrayToNumber([2, 10, 3]);
  condenseArrayToNumber([5, 0, 4, 1, 2]);
  condenseArrayToNumber([1]);
  