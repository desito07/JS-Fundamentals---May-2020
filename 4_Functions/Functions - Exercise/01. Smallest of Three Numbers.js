function smallestOfThreeNumbers(a, b, c) {
    if (a < b && a < c) {
      console.log(a);
    } else if (b < a && b < c) {
      console.log(b);
    } else {
      console.log(c);
    }
  }
  smallestOfThreeNumbers(2, 5, 3);