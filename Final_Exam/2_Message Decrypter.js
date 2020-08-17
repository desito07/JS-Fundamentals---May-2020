function solve(input){
    let num = input.shift();
    // console.log(num);
    for(let line of input){
        let pattern = /([\$\%])(?<tag>[A-Z][a-z]{2,})\1:[ ]\[(?<first>\d+)\]\|\[(?<second>\d+)\]\|\[(?<third>\d+)\]\|/g;
        let match = pattern.exec(line);
        if(match){
            let tag = match.groups.tag;
            let first = String.fromCharCode(match.groups.first);
            let second = String.fromCharCode(match.groups.second);
            let third = String.fromCharCode(match.groups.third);
            if(line.startsWith(`%${match.groups.tag}%:`) || line.startsWith(`$${match.groups.tag}$:`) && (line.endsWith(`[${match.groups.third}]|`))){                
            console.log(`${tag}: ${first+second+third}`);                
            } else {
                console.log('Valid message not found!');  
            }
        } else {
            console.log('Valid message not found!');
        }
    }
}
solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
  ]
  );
  solve([
    '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
  ]
  );