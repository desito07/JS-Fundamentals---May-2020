function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      let element1 = arr1[i];
      for (let i = 0; i < arr2.length; i++) {
        let element2 = arr2[i];
        if (element1 === element2) {
          console.log(element1);
        }
      }
    }
  }
  commonElements(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
  );
  