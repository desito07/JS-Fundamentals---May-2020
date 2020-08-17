function solve(input){
    let num = input.shift();
    // console.log(num);
    for(let line of input){
        let pattern = /([\*\@])(?<tag>[A-Z][a-z]{2,})\1:[ ]\[(?<group1>\w)\]\|\[(?<group2>\w)\]\|\[(?<group3>\w)\]\|/g;
        let match = pattern.exec(line);       
        if(match){
            let tag = match.groups.tag;
            let group1 = match.groups.group1;
            let group2 = match.groups.group2;
            let group3 = match.groups.group3;
            if (line.endsWith(`[${match.groups.group3}]|`)) {
                console.log(`${tag}: ${group1.charCodeAt(0)} ${group2.charCodeAt(0)} ${group3.charCodeAt(0)}`); 
                } else {
                console.log('Valid message not found!');   
                }                    
        } else {
            console.log('Valid message not found!');            
        }
    }
}
solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
  ]
  );
  solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
  ]
  );