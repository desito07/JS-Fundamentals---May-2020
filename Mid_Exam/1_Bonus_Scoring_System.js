// Programming Fundamentals Mid Exam - 29 February 2020 Group 1

function bonusScoringSystem(input) {
  let countStudents = Number(input.shift());
  let countLectures = Number(input.shift());
  let additionalBonus = Number(input.shift());
  let current = input.shift();
  let maxBonus = 0;
  let maxAttendance = 0;
  let totalBonusPerStudent = 0;
  let counter = 0;

  while (counter < countStudents) {
    current = Number(current);
    totalBonusPerStudent = (current / countLectures) * (5 + additionalBonus);

    let arr = [];
    arr.push(Math.ceil(totalBonusPerStudent));

    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element > maxBonus) {
        maxBonus = element;
        maxAttendance = current;
      }
    }
    counter++;
    current = input.shift();
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem([5, 25, 30, 12, 19, 24, 16, 20]);
bonusScoringSystem([10, 30, 14, 8, 23, 27, 28, 15, 17, 25, 26, 5, 18]);
