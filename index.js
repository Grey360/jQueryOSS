const url = "https://jsonplaceholder.typicode.com/users";
let jsonArray;
let size;
// Our ajax call to get the API object.
const ajaxOptions = {
    url: url,
    success: function(result){
        jsonArray = result;
        size = jsonArray.length-1;
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
    let inp = parseInt(input.value);
    console.log(typeof inp);
    details.innerHTML = inp > -1 && inp < jsonArray.length ? JSON.stringify(jsonArray[inp], undefined, "\t") : "Please use a number between 0 and " + size + "!";       
}
