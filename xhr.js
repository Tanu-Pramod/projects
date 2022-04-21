var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholdertypicode.com/todos/1', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
  if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    
};

xhr.send(null);
