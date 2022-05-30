function myDisplayer(some) {
  console.log(some);
}

var XMLHttpRequest = require('xhr2');
 

const getFile = () => {
  let req = new XMLHttpRequest();
  req.open('GET',"http://localhost:3000/list");
  req.onload = function() {
    if (req.status == 200) {
      return this.responseText;
    } else {
      return req.status;
    }
  }
  req.send();
}


const test = async() => {
 let data = await getFile();
 myDisplayer(data);
}

test();
