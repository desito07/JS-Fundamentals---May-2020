function listOfProducts(arr) {
  let sortedArr = arr.sort();

  for(let i = 0; i < arr.length; i++){
    let element = arr[i];    
    console.log(`${i + 1}.${element}`);
  }  
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
