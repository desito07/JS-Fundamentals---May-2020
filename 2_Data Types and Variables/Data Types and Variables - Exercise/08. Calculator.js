function calculator(num, operator, otherNum) {
    if (operator === "+") {
      console.log((num + otherNum).toFixed(2));
    } else if (operator === "-") {
      console.log((num - otherNum).toFixed(2));
    } else if (operator === "*") {
      console.log((num * otherNum).toFixed(2));
    } else if (operator === "/") {
      console.log((num / otherNum).toFixed(2));
    } else if (operator === "%") {
      console.log((num % otherNum).toFixed(2));
    }
  }
  calculator(5, "+", 10);
  calculator(25.5, "-", 3);