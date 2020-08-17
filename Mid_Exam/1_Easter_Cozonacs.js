// Technology Fundamentals Retake Mid Exam - 16 April 2019
// ===========================================================

function solve(input) {
  let budget = Number(input.shift());
  let flourPricePerKg = Number(input.shift());

  let eggsPackPrice = flourPricePerKg * 0.75;
  let milkLiter = flourPricePerKg * 0.25 + flourPricePerKg;
  let milkNeededLiter = milkLiter * 0.25;
  let moneyCozonac = eggsPackPrice + milkNeededLiter + flourPricePerKg;

  //   console.log(moneyCozonac);

  let counter = 0;
  let eggsColoured = 0;

  while (budget >= 0) {
    counter++;    
    eggsColoured += 3
    budget -= moneyCozonac;

    if (counter % 3 === 0) {
      eggsColoured -= counter - 2;     
    }

    if (budget < moneyCozonac) {
      console.log(
        `You made ${counter} cozonacs! Now you have ${eggsColoured} eggs and ${budget.toFixed(
          2
        )}BGN left.`
      );
      break;
    }
  }
}
solve(["20.50", "1.25"]);
solve(["15.75", "1.4"]);
