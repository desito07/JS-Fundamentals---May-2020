// Programming Fundamentals Mid Exam - 29 February 2020 Group 2
// ==============================================================

function nationalCourt(input) {
  let em1 = Number(input.shift());
  let em2 = Number(input.shift());
  let em3 = Number(input.shift());
  let efficiencyPerHour = em1 + em2 + em3;
  let peopleCount = Number(input.shift());
  let time = 0;

  while (peopleCount > 0) {
    time++;

    if (time % 4 === 0) {
      time++;
    }
    peopleCount -= efficiencyPerHour;
  }
  console.log(`Time needed: ${time}h.`);
}
nationalCourt([5, 6, 4, 20]);
nationalCourt([1, 2, 3, 45]);
nationalCourt([3, 2, 5, 40]);
