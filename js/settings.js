var ref=firebase.database().ref().child("email");
ref.on('value', function(snapshot) {

   var child = snapshot.val();
   var email = child.from;
   var to = child.to;
   var time = child.time;
   document.getElementById("emai").innerHTML = email;
   document.getElementById("t").innerHTML = to;
   document.getElementById("tim").innerHTML = time;

});
$('#js-form').submit(function(event){
    const email = $('#email').val();
    const pass = $('#pwd').val();
    const to = $('#to').val();
    const time= $('#time').val();
    //alert("Successfully changed");
      //console.log(email,pass,to,time);
    firebase.database().ref().child("email/from").set(email);
    firebase.database().ref().child("email/pass").set(pass);
    firebase.database().ref().child("email/to").set(to);
    firebase.database().ref().child("email/time").set(time);
    //document.getElementById('#js-form').reset();


});
