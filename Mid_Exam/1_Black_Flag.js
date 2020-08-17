// Programming Fundamentals Mid Exam Retake - 6 August 2019
// ==========================================================

function blackFlag(input) {
  let days = Number(input.shift());
  let dailyPlunder = Number(input.shift());
  let expectedPlunder = Number(input.shift());

  let targetPlunder = 0;

  for (let i = 1; i <= days; i++) {
    targetPlunder += dailyPlunder;

    if (i % 3 === 0) {
      targetPlunder += dailyPlunder * 0.5;
    }
    if (i % 5 === 0) {
      targetPlunder -= targetPlunder * 0.3;
    }
  }
  if (targetPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${targetPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percent = (targetPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
