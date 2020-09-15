let nameHere = localStorage['nameToPass'];
let headHere = localStorage['titleToPass'];
let inputTest = localStorage['objectToPass'];

      localStorage.removeItem( 'nameToPass' );
      localStorage.removeItem( 'titleToPass' );
      localStorage.removeItem( 'objectToPass' ); // Clear the localStorage
      
      document.getElementById("user").innerHTML = nameHere;
      document.getElementById("head").innerHTML = headHere;
      document.getElementById("container").innerHTML= inputTest;
     
      

