function spiceMustFlow(startYield) {
    startYield = startYield;
    let totalAmount = 0;
    let days = 0;
    let workersSpice = 26;
    let expectedYield = startYield;
  
    if (expectedYield < 100) {
      console.log(days);
      console.log(totalAmount);
    } else {
      while (expectedYield >= 100) {
        expectedYield -= workersSpice;
        totalAmount += expectedYield;
        startYield -= 10;
        expectedYield = startYield;
        days++;
      }
      totalAmount -= 26;
      console.log(days);
      console.log(totalAmount);
    }
  }
  spiceMustFlow(111);
  spiceMustFlow(450);
  spiceMustFlow(200);
  