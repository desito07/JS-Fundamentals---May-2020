function biggestOf3Numbers(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
      console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
      console.log(n2);
    } else {
      console.log(n3);
    }
  }
  biggestOf3Numbers([-2, 7, 3]);
  biggestOf3Numbers(130, 5, 99);
  biggestOf3Numbers(43, 43.2, 43.1);