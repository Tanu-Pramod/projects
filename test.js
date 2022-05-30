let arr = [5, 11, 3, 10, 11, 2, 8, 10, 5, 1];
let arrayOfArray = []

for (i = 0; i <= arr.length; i++) {
  for(j=0;j<arr.length;j++){
  if (arr[0] > arr[j]) {
    arrayOfArray.push(arr.splice(0, j));
    
  }
}

}
arrayOfArray.push(arr)

console.log("arrayofarray", arrayOfArray)


