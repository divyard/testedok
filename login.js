function myFunction() {
  var x = document.getElementById("log-form").elements.namedItem("email").value;
  var y = document.getElementById("log-form").elements.namedItem("password").value;
  if(x=="divya.19.1@protosem.tech")
  {
    if(y=="divyard410")
    {
       document.getElementById("log-form").reset();
       window.location.href="index.html";

    }
    else {

        alert("Incorrect password");



    }
  }
 else {

        alert("Invalid User");


    }

}
