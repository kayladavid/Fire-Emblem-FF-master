// console.log ('Hello world');
let name = document.getElementById('uname');
let title = document.getElementById('title');
let inputTest = document.getElementById('story');

document.getElementById('buttonId').addEventListener('click',store_data);  //Button Click Listener.

function store_data(){ // Store value from input field to local store
    localStorage.setItem('nameToPass', name.value);
    localStorage.setItem('titleToPass', title.value);
    localStorage.setItem( 'objectToPass', inputTest.value);
}


// save name and title into card, save data each time, responsive.




