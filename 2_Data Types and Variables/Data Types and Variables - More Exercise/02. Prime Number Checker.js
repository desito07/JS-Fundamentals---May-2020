function primeNumberChecker(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    console.log(count === 2 ? true : false);
  }
  primeNumberChecker(7);
  primeNumberChecker(8);
  primeNumberChecker(81);