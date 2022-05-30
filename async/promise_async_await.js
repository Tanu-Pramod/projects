const myPromise = new Promise(function (myResolve, myReject) {
  var XMLHttpRequest = require("xhr2");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholdertypicode.com/todos/1", true);
  //below line is for post request
  //xhr.getResponseHeader("content-type", "application/JSON");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        setTimeout(function () { myResolve("Hello") }, 3000);
        //myResolve(xhr.responseText);
      } else {
        myReject("Error", xhr.statusText);
      }
    }
  };

  //xhr.send();
  xhr.send();

  //setTimeout(function(){ myResolve("I love You !!"); }, 3000);
});

const f = async () => {

  await myPromise.then(function (value) {
    console.log(value);
  }, function (err) {
    console.log(err)
  });

  console.log("THIS IS TESTING");
}

f();


