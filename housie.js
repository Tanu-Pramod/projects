let Btn = document.getElementsByClassName("Btn");
let gen = document.getElementById("gen");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
gen.addEventListener("click", function () {

  for (let i = arr.length - 1; i > 0; i--) {
    
    let j = Math.floor(Math.random() * i)
    let swap = arr[i]
    arr[i] = arr[j]
    arr[j] = swap
  }

  if (arr.length > 0) {
    poppedEl = arr.pop();
    Btn[poppedEl - 1].style.backgroundColor = "green";
    Btn[poppedEl - 1].style.color = "white";
    
  }
  else {
    alert("Please stop! there is no circle left to color. Please refresh the page and try again");
  }




})


