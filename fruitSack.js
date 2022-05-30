const fruitsWeight = [14, 15, 6, 4];
const profit = [50, 60, 80, 50];
const bagCapacity = 35;
let baghas = 0;

const profitPerKg = profit.map((profit, index) => {
  return profit / fruitsWeight[index];

})

const constProfitPerKg = profitPerKg.map((profit) => profit);

console.log("profit", profit);
console.log("fruitsweight", fruitsWeight);
console.log("profitPerKg", profitPerKg)
console.log("constprofitPerKg", constProfitPerKg)

for (i = 0; i < profitPerKg.length; i++) {
  let max = 0;
  for (j = 0; j < profitPerKg.length; j++) {

    if (profitPerKg[i] < profitPerKg[j]) {

      max = profitPerKg[j];
      profitPerKg[j] = profitPerKg[i];
      profitPerKg[i] = max;


    }
  }

}

console.log("profitPerKg", profitPerKg)

const index = []
for (i = 0; i < profit.length; i++) {
  index.push(constProfitPerKg.indexOf(profitPerKg[i]))

}

// console.log("index",index);

let fruits = []
for (i = 0; i < profit.length; i++) {
  fruits.push(fruitsWeight[index[i]])
}

console.log("fruits", fruits)
let profitearned = 0;

for (i = 0; i < fruitsWeight.length; i++) {
  let bagrequire = bagCapacity - baghas;
  if (baghas < bagCapacity) {
    let fruitToSell = fruits.pop();
    let priceperkg = profitPerKg.pop();
    if (fruitToSell > bagrequire) {
      baghas += bagrequire;
      profitearned = profitearned + bagrequire * priceperkg;
      fruits.push(fruitToSell - bagrequire);
      profitPerKg.push(priceperkg);
      break;
    }
    else {
      baghas += fruitToSell;
      profitearned = profitearned + fruitToSell * priceperkg;
      
}
}
  else {
    break;
  }
}



console.log("baghas", baghas)
console.log("fruits", fruits)
console.log("profitPerKg", profitPerKg)
console.log("profitearned", profitearned)



















