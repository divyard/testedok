function dat(){
var database = firebase.database();
var ref=database.ref().child("tes");
ref.on('value', function(snapshot) {

   var child = snapshot.val();
   var good = child.good;
   var bad = child.bad;
   var gv = parseInt(good, 10);
   var bv = parseInt(bad, 10);
   var production = gv + bv;

   document.getElementById("gval").innerHTML = good;
   document.getElementById("bval").innerHTML = bad;
   document.getElementById("pval").innerHTML = production;
   document.getElementById("dval").innerHTML = today;
   var te=document.getElementById("gval").innerHTML;

});
}dat();
