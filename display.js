let inputTest = localStorage['objectToPass'];
      localStorage.removeItem( 'objectToPass' ); // Clear the localStorage
      
      document.getElementById("container").innerHTML= inputTest;
     // alert('Inserted Data' + inputTest);

