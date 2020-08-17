// Programming Fundamentals Mid Exam - 2 November 2019 Group 1

function biscuitsFactory(input) {
  let productionPerDay = Number(input.shift());
  let countWorkers = Number(input.shift());
  let productionCompetitor = Number(input.shift());

  let productionFactory = 0;

  for (let i = 1; i <= 30; i++) {
    let daily = productionPerDay * countWorkers;
    if (i % 3 === 0) {
      daily = Math.floor(daily * 0.75);
    }
    productionFactory += daily;
  }
  console.log(
    `You have produced ${productionFactory} biscuits for the past month.`
  );
  let diff = productionFactory - productionCompetitor;
  let percentage = (Math.abs(diff) / productionCompetitor) * 100;

  if (diff > 0) {
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else {
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
}
biscuitsFactory([78, 8, 16000]);
biscuitsFactory([65, 12, 26000]);
