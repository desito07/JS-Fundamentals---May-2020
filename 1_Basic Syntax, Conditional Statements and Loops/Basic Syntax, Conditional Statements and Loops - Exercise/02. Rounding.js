function rounding(num, precision) {
    if (precision <= 15) {
      precision = precision;
    } else {
      precision = 15;
    }
    console.log(parseFloat(num.toFixed(precision)));
  }
  rounding(10.5, 3);
  rounding(3.141592653589793, 2);