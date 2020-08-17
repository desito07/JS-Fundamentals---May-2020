// Programming Fundamentals Mid Exam Retake - 10 December 2019
// ============================================================

function disneylandJourney(input) {
  let budget = Number(input.shift());
  let months = Number(input.shift());

  let savedMoney = 0;

  for (let i = 1; i <= months; i++) {
    let current = budget * 0.25;

    if (i % 2 !== 0 && i !== 1) {
      savedMoney = savedMoney - savedMoney * 0.16;
    }
    if (i % 4 === 0) {
      savedMoney += savedMoney * 0.25;
    }
    savedMoney += current;
  }
  if (budget < savedMoney) {
    console.log(
      `Bravo! You can go to Disneyland and you will have ${(
        savedMoney - budget
      ).toFixed(2)}lv. for souvenirs.`
    );
  } else {
    let diff = Math.abs(budget - savedMoney);
    console.log(`Sorry. You need ${diff.toFixed(2)}lv. more.`);
  }
}
disneylandJourney([1000, 4]);
disneylandJourney([3265, 3]);
