function myDisplayer(some) {
  console.log(some);
}

const getFile = () => {
  let req = new XMLHttpRequest();  req.open('GET',"https://api.sampleapis.com/beers/ale");
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
