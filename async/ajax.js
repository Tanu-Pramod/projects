let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",handleButton)
function handleButton(){
  console.log("you have clicked the button");
  const xhr = new XMLHttpRequest();
  // xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
  xhr.open("POST","http://dummy.restapiexample.com/api/v1/create",true);
  xhr.getResponseHeader("content-type","application/JSON");
  xhr.onprogress=function(){
    console.log("On progress");

  }
  xhr.onload=function(){
    console.log(this.responseText);
  }
  //xhr.send();
  params= `{"name":"test123","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log("we are done");

}