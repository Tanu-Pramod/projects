let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function () {
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");

  let text1val = parseInt(text1.value);
  let text2val = parseInt(text2.value);
  let result;



  if (isNaN(text1val)) {
    alert("Enter a number");
  }


  else if (isNaN(text2val)) {
    alert("Enter a number");
  }

  else{

    let Select = document.getElementById("Select").value;

    switch(Select) {
    case "+":
    result = text1val + text2val;
    break;
    case "-": result = text1val - text2val;
    break;
    case "*": result = text1val * text2val;
    break;
    case "/": result = text1val / text2val;
    break;
    default: alert("select the operator");

  }
  }








  document.getElementById("result").value = result;









})