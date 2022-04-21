let Btn = document.getElementsByTagName("button");

for(let btn of Btn){
 btn.addEventListener("click",function(){
   this.style.backgroundColor="green";
   this.style.color="white";
 })
}

// 
// Btn.map(function(val){val.addEventListener("click",function(){
//   this.style.backgroundColor="green";
// })})

