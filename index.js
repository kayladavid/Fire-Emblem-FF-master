console.log ('Hello world');

const form = document.getElementById("button");
const log = document.getElementById("log");

form.addEventListener("submit", function(){

    // Only when the form has been submitted do you want the textbox value
    let inputTest = document.getElementById('story').value;
    localStorage.setItem( 'objectToPass', JSON.stringify(inputTest));

    var myObject = JSON.parse(localStorage.getItem('myObject'));

    window.location.href = 'display.html';

  });

