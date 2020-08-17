function solve(input){
    let tour = input.shift();
    // console.log(tour);

    for(let i = 0; i < input.length;i++){
        let [ command, firstArg, secondArg] = input[i].split(':');
        // console.log(command);
        switch(command){
            case "Add Stop":                
                    let index = Number(firstArg);                               
                    if(index >= 0 && index < tour.length){ 
                        let str = tour.substring(index);                                        
                        let str1 = tour.replace(str, secondArg);
                        tour = `${str1}${str}`;                        
                    }          
                console.log(tour);
                break;
            case "Remove Stop":
                let start = Number(firstArg);
                let end = Number(secondArg);
                let cut = '';
                if(start >= 0 && start < tour.length && end >= 0 && end < tour.length){
                   cut = tour.substring(start, end + 1);
                   tour = tour.replace(cut, '');                   
                }
                console.log(tour);
                break;
            case "Switch":                
                    tour = tour.replace(firstArg, secondArg);                
                console.log(tour);
                break;
            case "Travel":
                break;
        }
    } 
    console.log(`Ready for world tour! Planned stops: ${tour}`)
}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]
  );
// ==========================================================
function solve(input){
    let points = 0;
    let mapper = [];
    let pattern = /([\=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(input);
    while(match !== null){
        let destination = match.groups.destination;
        mapper.push(destination);
        // console.log(mapper)
        points += destination.length;                      
        match = pattern.exec(input); 
    }
    console.log(`Destinations: ${mapper.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
solve('ThisIs some InvalidInput');
// =====================================================
function solve(input){
    let num = input.shift();
    // console.log(num);

    let plants = {};

    for(let i = 0; i < num; i++){
        let [plantName, rarity] = input[i].split('<->');
        rarity = Number(rarity);
        rating = [];
        plants[plantName] = {rarity, rating};
    }
    // console.log(plants);

    for(let i = 0; i < input.length; i++){
        let [command, arr] = input[i].split(': ');
        // console.log(command);                            
        switch(command){                      
            case "Rate": 
            let [name, rating] = arr.split(' - ');
            rating = Number(rating);                                   
            if(plants[name] != undefined) {
                plants[name].rating.push(rating);
            } else {
                console.log('error');
            }               
                break;
            case "Update":
            let [name1, rarity] = arr.split(' - ');
            rarity = Number(rarity);
            if(plants[name1] != undefined) {
                plants[name1].rarity = rarity;
            } else {
                console.log('error');
            }
                break;
            case "Reset":
            let plantName = arr;
            if(plants[plantName] != undefined) {                     
            plants[plantName].rating = [];            
            } else {
            console.log('error');
            }            
                break;
            case "Exhibition":
                break;            
        }    
    }
    let keys = Object.keys(plants);
    keys.forEach(key => {
        let ratings = plants[key].rating;
 
        if(ratings.length > 0) {
            let averageRating = ratings.reduce((a, b) => (a + b) / ratings.length);
 
            plants[key].rating = averageRating;
        } else {
            plants[key].rating = 0;
        }
    });
    console.log('Plants for the exhibition:');       
    let sorted = Object.entries(plants).sort((a, b) => b[1].rarity - a[1].rarity || b[0].rating - a[0].rating);
    
    for(let kvp of sorted) {
      console.log(`- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${(kvp[1].rating).toFixed(2)}`);
    } 
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]
  );
  solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
  ]
  );