// console.log ('Hello world');
const name = document.getElementById('uname');
const title = document.getElementById('title');
const inputTest = document.getElementById('story');
// const btnInsert = document.getElementById('buttonId');

/* btnInsert.onclick = () => {
  localStorage.setItem('nameToPass', name.value);
  localStorage.setItem('titleToPass', title.value);
  localStorage.setItem( 'objectToPass', inputTest.value);
}; */

document.getElementById('buttonId').addEventListener('click',saveStories);  //Button Click Listener.

function saveStories() {
  let str = JSON.stringify(name, title, inputTest);
  localStorage.setItem('objectToPass', str);
}

function getStories() {
  let pass = localStorage.getItem('objectToPass');
  localStorage.removeItem ( 'objectToPass' );
  document.getElementById("container").innerHTML = JSON.parse(pass);
}

getStories();

/* function store_data(){ // Store value from input field to local store
    localStorage.setItem('nameToPass', name.value);
    localStorage.setItem('titleToPass', title.value);
    localStorage.setItem( 'objectToPass', inputTest.value);

}; */

// save data each time to a new card, open a new page when clicking story, responsive.

