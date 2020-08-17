// Technology Fundamentals Mid Exam - 10 March 2019 Group 1
// ==========================================================

function solve(input) {
  let items = input.shift().split("|");
  let budget = Number(input.shift());
  // console.log(items);
  let newPrice = 0;
  let totalNewPrice = 0;
  let profit = 0;
  let totalPrices = 0;
  let newPricesArr = [];

  for (let i = 0; i < items.length; i++) {
    let [products, prices] = items[i].split("->");
    // console.log(products);
    // console.log(prices);
    let currentPrice = Number(prices);
    // budget -= currentPrice;

    if (currentPrice > budget) {
      break;
    }

    let maxPrice = 0;
    let newPrice = 0;

    if (products === "Clothes") {
      maxPrice = 50.0;
      if (currentPrice < maxPrice) {
        budget -= currentPrice;
        newPrice = Number(prices) + currentPrice * 0.4;
        totalNewPrice += newPrice;
        totalPrices += Number(prices);
      }
    } else if (products === "Shoes") {
      maxPrice = 35.0;
      if (currentPrice < maxPrice) {
        budget -= currentPrice;
        newPrice = Number(prices) + currentPrice * 0.4;
        totalNewPrice += newPrice;
        totalPrices += Number(prices);
      }
    } else if (products === "Accessories") {
      maxPrice = 20.5;
      if (currentPrice < maxPrice) {
        budget -= currentPrice;
        newPrice = Number(prices) + currentPrice * 0.4;
        totalNewPrice += newPrice;
        totalPrices += Number(prices);
      }
    }
    

    // console.log(budget);
    // console.log(newPrice);
    
    newPricesArr.push(newPrice.toFixed(2));
    profit = totalNewPrice - totalPrices;
    // console.log(profit.toFixed(2));
  }
    console.log(newPricesArr.join(" "));
    console.log(`Profit: ${profit.toFixed(2)}`);

  newPricesArr.map(Number);
  let updatedArr = [];
  for (let i = 0; i < newPricesArr.length; i++) {
    let element = newPricesArr[i];
    if (element !== 0) {
      updatedArr.push(element);
    }
  }
//   console.log(updatedArr);

  //   let sum = newPricesArr.reduce((a, b) => a + b, 0.00);
  sum = totalNewPrice + budget;
  if (sum >= 150) {
    console.log("Hello, France!");
  } else {
    console.log("Time to go.");
  }
}
solve([
  "Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60",
  "120",
]);
solve([
  "Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60",
  "90",
]);
