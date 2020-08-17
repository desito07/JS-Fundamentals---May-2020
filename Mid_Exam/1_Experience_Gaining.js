// Programming Fundamentals Mid Exam - 2 November 2019 Group 2
// ===========================================================

function experienceGaining(input) {
  let experience = Number(input.shift());
  let countBattles = Number(input.shift());
  let experiencePerBattle = input.shift();
  let experienceWanted = 0;
  let counter = 0;
  let isCollected = false;

  while (counter < countBattles) {
    experiencePerBattle = Number(experiencePerBattle);
    counter++;

    if (counter % 3 === 0) {
      experienceWanted += experiencePerBattle * 0.15;
    }
    if (counter % 5 === 0) {
      experienceWanted -= experiencePerBattle * 0.1;
    }
    experienceWanted += experiencePerBattle;

    if (experienceWanted >= experience) {
      isCollected = true;
      break;
    }
    experiencePerBattle = input.shift();
  }
  if (isCollected || experienceWanted > experience) {
    console.log(
      `Player successfully collected his needed experience for ${counter} battles.`
    );
  } else {
    let diff = experience - experienceWanted;
    console.log(
      `Player was not able to collect the needed experience, ${diff.toFixed(
        2
      )} more needed.`
    );
  }
}
experienceGaining([500, 5, 50, 100, 200, 100, 30]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
