function amazingNumbers(num1) {
    num1 = String(num1);
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
      sum += Number(num1[i]);
    }
    let result = String(sum).includes(9);
    console.log(`${num1} Amazing? ${result ? "True" : "False"}`);
  }
  amazingNumbers(1233);
  amazingNumbers(999);