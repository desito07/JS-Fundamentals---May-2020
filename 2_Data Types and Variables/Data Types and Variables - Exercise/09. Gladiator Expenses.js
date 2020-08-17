function gladiatorExpenses(
    lostFightCount,
    helmetPrice,
    swordPrice,
    shieldPrice,
    armorPrice
  ) {
    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
  
    for (let i = 1; i <= lostFightCount; i++) {
      if (i % 2 === 0) {
        helmetCount++;
      }
      if (i % 3 === 0) {
        swordCount++;
      }
      if (i % 2 === 0 && i % 3 === 0) {
        shieldCount++;
      }
      if (i % 4 === 0 && i % 6 === 0) {
        armorCount++;
      }
    }
    let expense =
      helmetPrice * helmetCount +
      swordCount * swordPrice +
      shieldCount * shieldPrice +
      armorCount * armorPrice;
    console.log(`Gladiator expenses: ${expense.toFixed(2)} aureus`);
  }
  gladiatorExpenses(7, 2, 3, 4, 5);
  gladiatorExpenses(23, 12.5, 21.5, 40, 200);