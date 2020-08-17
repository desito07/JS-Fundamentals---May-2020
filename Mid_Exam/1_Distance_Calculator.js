// Programming Fundamentals Mid Exam - 30 June 2019 Group 1
// ==========================================================

function solve(input){
    let stepsMade = Number(input.shift());
    let lengthOfOneStep = Number(input.shift());
    let neededDistanceTravel = Number(input.shift());
    
    let expectedDistanceTravel = 0;
    let lengthOfOneStepInMeters = lengthOfOneStep / 100;
    for(let i = 1; i <= stepsMade; i++){
         
        if(i % 5 === 0){
            expectedDistanceTravel -= lengthOfOneStepInMeters * 0.30;
        }

        expectedDistanceTravel += lengthOfOneStepInMeters;
    }
    
    // console.log(expectedDistanceTravel);
    let percentage = (expectedDistanceTravel / neededDistanceTravel) * 100;
    console.log(`You travelled ${percentage.toFixed(2)}% of the distance!`);    
}
solve([ '100', '2', '1' ]);
solve([ '5000', '7.5', '500' ]);