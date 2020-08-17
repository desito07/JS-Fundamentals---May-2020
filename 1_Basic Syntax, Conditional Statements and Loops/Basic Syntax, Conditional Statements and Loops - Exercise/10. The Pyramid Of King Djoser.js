function Pyramid(base, increment) {
    let stoneTotal = 0;
    let marbleTotal = 0;
    let lapisTotal = 0;
    let goldTotal = 0;
    let row = 0;
    let currentbase = base;
  
    while (currentbase > 2) {
      let marble = currentbase * 4 - 4;
      let stone = currentbase * currentbase - marble;
      stoneTotal += stone;
      row++;
      if (row % 5 === 0) {
        lapisTotal += marble;
      } else {
        marbleTotal += marble;
      }
      currentbase -= 2;
    }
    row++;
    let gold = currentbase * currentbase;
  
    stone = Math.ceil(stoneTotal * increment);
    marble = Math.ceil(marbleTotal * increment);
    lapis = Math.ceil(lapisTotal * increment);
    goldTotal = Math.ceil(gold * increment);
    heightTotal = Math.floor(row * increment);
  
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${goldTotal}`);
    console.log(`Final pyramid height: ${heightTotal}`);
  }
  Pyramid(11, 1);