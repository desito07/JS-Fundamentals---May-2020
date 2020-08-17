function solve(input) {
  input.forEach((line) => {
    // console.log(line);
    const arr = line.split(" | ");
    let city = {
      town: arr[0],
      latitude: Number(arr[1]).toFixed(2),
      longitude: Number(arr[2]).toFixed(2),
    };
    console.log(city);
  });
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
