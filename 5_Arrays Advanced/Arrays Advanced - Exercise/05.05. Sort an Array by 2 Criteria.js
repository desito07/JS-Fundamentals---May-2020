function sortAnArrayBy2Criteria(arr) {
  arr.sort(customSort);

  console.log(arr.join("\n"));

  function customSort(a, b) {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return a.localeCompare(b);
    }
  }
}
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
