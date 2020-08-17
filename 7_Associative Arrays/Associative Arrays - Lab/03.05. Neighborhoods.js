function solve(input){
    let neighborhoodNames = input
        .shift()
        .split(', ');
    // console.log(neighborhoodNames);

    let neighborhoods = {};
    neighborhoodNames.forEach(name => {
        neighborhoods[name] = [];
    });
//    console.log(neighborhoods);
   input.forEach(line => {
       let[name, person] = line.split(' - ');
       if(neighborhoods.hasOwnProperty(name)){
            neighborhoods[name].push(person);
       }       
   });
//    console.log(neighborhoods);
   let neighborhoodEntries = Object.entries(neighborhoods);
   let sorted = neighborhoodEntries.sort((a,b) => b[1].length - a[1].length);
//    console.log(sorted);
   
for(let kvp of sorted){
    console.log(`${kvp[0]}: ${kvp[1].length}`);

        for(let person of kvp[1]){
            console.log(`--${person}`);
        }
    }
}
solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
  ]
  );
