var database = firebase.database();
var ref=database.ref().child("tes");
var d = new Date();
var today = new Date();
var dd = today.getDate();
var good;
var bad;
var production;
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = dd+'-'+mm+'-'+yyyy;
ref.on('value', function(snapshot) {

   var child = snapshot.val();
   good = child.good;
   bad = child.bad;
   console.log(good);
   var gv = parseInt(good, 10);
   var bv = parseInt(bad, 10);
   production = gv + bv;
 });
var reff=database.ref().child("email");
reff.on('value', function(snapshot) {
  var child = snapshot.val();
  var from = child.from;
  var to = child.to;
  var pass=child.pass;
  var time=child.time;
  console.log(from,time,to);
  var hrs = Number(time.match(/^(\d+)/)[1]);
  var mnts = Number(time.match(/:(\d+)/)[1]);
  var format = time.match(/\s(.*)$/)[1];
  if (format == "PM" && hrs < 12) hrs = hrs + 12;
  if (format == "AM" && hrs == 12) hrs = hrs - 12;
  var hour = hrs.toString();
  var minute = mnts.toString();
  if (hrs < 10) hour = "0" + hour;
  if (mnts < 10) minute = "0" + minute;
  var hrint = parseInt(hour, 10);
  var mint = parseInt(minute, 10);

  setInterval(function(){
    console.log(hrint);
    console.log(mint);
  var date = new Date();
  if(date.getHours() === hrint && date.getMinutes() === mint){
  Email.send({
  Host : "smtp.gmail.com",
  Username : from,
  Password : pass,
  To : to,
  From : from,
  Subject :today + "  Regarding Quality Check Results",
  Body : "Total Production " + production + "<br> Good " + good + "<br> Bad " + bad,
  });
  return;
  }
  }, 30000);

});
