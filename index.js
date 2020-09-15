// console.log ('Hello world');
const name = document.getElementById('uname');
const title = document.getElementById('title');
const inputTest = document.getElementById('story');

document.getElementById('buttonId').addEventListener('click',store_data);  //Button Click Listener.

function store_data(){ // Store value from input field to local store
    localStorage.setItem('nameToPass', name.value);
    localStorage.setItem('titleToPass', title.value);
    localStorage.setItem( 'objectToPass', inputTest.value);
}

// var note = document.querySelector( '#submit-content' ); inputTest
// var post = document.querySelector( '.submit-note' ); buttonId
// var toDo = document.querySelector( '#column-one' ); card

/**
 * Add note from textarea to a column.
 *
 * @param {DOMNode} column The column to add a note to.
 * @param {String}  inputTest   The note/text from the textarea.
 */
function addNote( column, inputTest ) {

  var div = document.createElement( 'div' );
  
  div.textContent = inputTest;
  column.appendChild( div );
  
}




// save data each time to a new card, open a new page when clicking story, responsive.




