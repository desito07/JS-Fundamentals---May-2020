function equalSums(arr) {
    let result = "no";
    for (let index = 0; index < arr.length; index++) {
      let sumLeft = 0;
      let sumRight = 0;
  
      for (let i = 0; i < index; i++) {
        // calculate left sum
  
        let nextLeftNumber = arr[i];
        sumLeft += nextLeftNumber;
      }
      for (let i = index + 1; i < arr.length; i++) {
        // calculate right sum
  
        let nextRightNumber = arr[i];
        sumRight += nextRightNumber;
      }
      if (sumLeft === sumRight) {
        result = index;
        break;
      }
    }
    console.log(result);
  }
  equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
  equalSums([1, 2, 3, 3]);