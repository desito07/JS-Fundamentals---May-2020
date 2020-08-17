function solve(input){
  let pattern = /([@#])(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
  let match = pattern.exec(input);

  let wordPairsCount = 0;
  let mirrorWords = [];

  while(match !== null){
      wordPairsCount++;
      let first = match.groups.first;
      let second = match.groups.second;
      let reversed = first.split('').reverse().join('');
         
      if(reversed === second){
          mirrorWords.push(`${first} <=> ${second}`);                    
      }
      match = pattern.exec(input);
  }
  if(wordPairsCount < 1){
      console.log('No word pairs found!');
  } else {
      console.log(`${wordPairsCount} word pairs found!`);
  }
  if(mirrorWords < 1){
      console.log('No mirror words!');
  } else {
      console.log('The mirror words are:');
      console.log(`${mirrorWords.join(', ')}`);
  }
}
solve([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);