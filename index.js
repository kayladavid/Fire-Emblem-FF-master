// console.log ('Hello world');

const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.card');
const storyInput = document.querySelector('.input');

function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
  <p class="time">${dateString}</p>
  <div class="flex-1">
    <p class="story-body">${data.comment}</p>
  </div>
</div>
</div>`);
}

const currentDate = new Date();

const date = currentDate.getDate();
const month = currentDate.getMonth(); //Be careful! January is 0 not 1
const year = currentDate.getFullYear();

const dateString = date + "-" +(month + 1) + "-" + year;

function appendComment (event) {

  const data = {
    comment: storyInput.value
    };

  event.preventDefault();

  if (storyInput.value.length < 1) return;


  template(data);


  storyInput.value = "";


  localStorage.setItem('storyListing', commentList.innerHTML);
}

submit.addEventListener('click', appendComment, false)


const saved = localStorage.getItem('storyListing');

if (saved) {
	commentList.innerHTML = saved;
}


/* const name = document.getElementById('uname');
const title = document.getElementById('title');
const inputTest = document.getElementById('story');
const container = document.getElementById('container');
// const btnInsert = document.getElementById('buttonId');

btnInsert.onclick = () => {
  localStorage.setItem('nameToPass', name.value);
  localStorage.setItem('titleToPass', title.value);
  localStorage.setItem( 'objectToPass', inputTest.value);
}; */

/*

document.getElementById('buttonId').addEventListener('click', saveStories);  //Button Click Listener.

function saveStories() {
  let str = name;
  localStorage.setItem('objectToPass', str);
}

function getStories() {
  let pass = localStorage.getItem('objectToPass');
  localStorage.removeItem ( 'objectToPass' );
  document.getElementById("head").innerHTML = pass;
}

getStories();

function store_data(){ // Store value from input field to local store
    localStorage.setItem('nameToPass', name.value);
    localStorage.setItem('titleToPass', title.value);
    localStorage.setItem( 'objectToPass', inputTest.value);

}; */

// save data each time to a new card, open a new page when clicking story, responsive.

