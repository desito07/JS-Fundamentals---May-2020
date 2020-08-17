function factoriel(num1, num2) {
    let factorielDivide = fistFactoriel(num1);
    function fistFactoriel(a) {
      let division = a;
  
      for (let i = a - 1; i >= 1; i--) {
        division *= i;
      }
      return division;
    }
    let finals = factorielAndDivide(num2);
    function factorielAndDivide(a) {
      // let dividedNumbers = factorielDivide / a;
      let dividedNumbers = factorielDivide / fistFactoriel(a);
      let finals = dividedNumbers.toFixed(2);
      return finals;
    }
    console.log(finals);
  }
  factoriel(5, 2);
  factoriel(6, 2);