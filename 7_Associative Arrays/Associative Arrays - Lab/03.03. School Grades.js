function solve(input){
let students = {};
    input.forEach(line => {
        let lineArr = line.split(' ');
        // console.log(lineArr);
        let name = lineArr.shift();
        let grades = lineArr.map(Number);
        // console.log(name);
        // console.log(grades);
        if(students.hasOwnProperty(name)){
            let oldGrades = students[name];
            let allGrades = oldGrades.concat(grades);
            students[name] = allGrades;           
        } else {
            students[name] = grades;
        }     
    }); 
    // console.log(students);
    let studentsEntries = Object.entries(students);
    // console.log(studentsEntries);
    
    let sorted = studentsEntries.sort((a, b) =>  {        
    
    let studentGradeA = a[1];        
    let studentGradeB = b[1];  

    let avrGradeA = studentGradeA.reduce((acc, a) => acc + a, 0) / studentGradeA.length;
    let avrGradeB = studentGradeB.reduce((acc, b) => acc + b, 0) / studentGradeB.length;
    return avrGradeA - avrGradeB; 
    });
    // console.log(sorted);   
      
    for(let kvp of studentsEntries){
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);        
    }
}
solve([ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ]);
