const url = "https://jsonplaceholder.typicode.com/users";
let jsonArray;

// Our ajax call to get the API object.
const ajaxOptions = {
    url: url,
    success: function(result){
        console.log(result);
        jsonArray = result;
    }
}

$.ajax(ajaxOptions);

const form = document.getElementById("form");
const input = document.getElementById("text");
const button = document.getElementById("button");
const details = document.getElementById("details");

form.onsubmit = (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log(jsonArray);
    console.log(input.value);
    
    let value = JSON.stringify(jsonArray[input.value]);
    details.innerHTML = value;
}
