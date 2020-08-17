
// Technology Fundamentals Mid Exam - 10 March 2019 Group 1
// ==========================================================

function solve(input) {
  let days = Number(input.shift());
  let budget = Number(input.shift());
  let peopleCount = Number(input.shift());
  let fuelPricePerKm = Number(input.shift());
  let foodExpencesPerPersonPerDay = Number(input.shift());
  let priceHotelPerPerson = Number(input.shift());

  let foodExpenses = foodExpencesPerPersonPerDay * peopleCount * days;
  //   console.log(foodExpenses);
  let hotelExpenses = priceHotelPerPerson * peopleCount * days;
  if (peopleCount > 10) {
    hotelExpenses -= hotelExpenses * 0.25;
  } else {
      hotelExpenses = hotelExpenses;
  }
  //   console.log(hotelExpenses);

  let expenses = hotelExpenses + foodExpenses;

  for (let i = 1; i <= days; i++) {
    let currentDistance = Number(input.shift());
    expenses += currentDistance * fuelPricePerKm;

    if (i % 3 === 0 || i % 5 === 0) {
      expenses *= 1.4;
    }
    if (i % 7 === 0) {
      expenses -= expenses / peopleCount;
    }
  }

  if (expenses <= budget) {
    console.log(
      `You have reached the destination. You have ${(budget - expenses).toFixed(
        2
      )}$ budget left.`
    );
  } else {
    console.log(
      `Not enough money to continue the trip. You need ${Math.abs(
        budget - expenses
      ).toFixed(2)}$ more.`
    );
  }
}
solve([
  "7",
  "12000",
  "5",
  "1.5",
  "10",
  "20",
  "512",
  "318",
  "202",
  "154",
  "222",
  "108",
  "123",
]);
solve([
  "10",
  "20500",
  "11",
  "1.2",
  "8",
  "13",
  "100",
  "150",
  "500",
  "400",
  "600",
  "130",
  "300",
  "350",
  "200",
  "300",
]);
