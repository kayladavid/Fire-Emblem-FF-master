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
const month = currentDate.getMonth();
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