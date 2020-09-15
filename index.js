// console.log ('Hello world');

let inputTest = document.getElementById('story');

document.getElementById('buttonId').addEventListener('click',store_data);  //Button Click Listener.

function store_data(){ // Store value from input field to local store
    localStorage.setItem( 'objectToPass', inputTest.value);
}






