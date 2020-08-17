function solve(input){
    let person = {};
    input.forEach((x) => {
        person[x] = x.length;
    });
    for(let name in person){
        console.log(`Name: ${name} -- Personal Number: ${person[name]}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ]
  );
