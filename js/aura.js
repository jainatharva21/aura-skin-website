function myFunction() {

    var x = document.getElementById("navbarNav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}