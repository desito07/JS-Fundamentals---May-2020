function triangleArea(side1, side2, side3) {
    let n = Math.sqrt(
      ((side1 + side2 + side3) / 2) *
        ((side2 + side3 + side1) / 2 - side1) *
        ((side1 + side3 + side2) / 2 - side2) *
        ((side1 + side2 + side3) / 2 - side3)
    );
    console.log(n);
  }
  triangleArea(2, 3.5, 4);