function sortNumbers(a, b, c) {
    let first = Number.MIN_SAFE_INTEGER;
    let second = 0;
    let third = 0;
  
    let wait = 0;
  
    if (a > first) {
      first = a;
      second = b;
      third = c;
    }
    if (b > first) {
      first = b;
      second = a;
      third = c;
    }
    if (c > first) {
      first = c;
      second = a;
      third = b;
    }
    if (third > second) {
      wait = second;
      second = third;
      third = wait;
    }
    console.log(first);
    console.log(second);
    console.log(third);
  }
  sortNumbers(2, 1, 3);